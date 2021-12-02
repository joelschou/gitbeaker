import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ProjectSchema } from './Projects';
import { ResourceIssueBoards } from '../templates';
import { IssueBoardSchema, IssueBoardListSchema } from '../templates/types';
import {
  BaseRequestOptions,
  PaginatedRequestOptions,
  Sudo,
  CamelizedResponse,
} from '../infrastructure';

export interface ProjectIssueBoardSchema extends IssueBoardSchema {
  project: Pick<
    ProjectSchema,
    | 'id'
    | 'name'
    | 'name_with_namespace'
    | 'path'
    | 'path_with_namespace'
    | 'http_url_to_repo'
    | 'web_url'
  >;
}

export interface ProjectIssueBoards<C extends boolean = false> extends ResourceIssueBoards<C> {
  all(
    groupId: string | number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, ProjectIssueBoardSchema>[]>;

  create(
    groupId: string | number,
    name: string,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, ProjectIssueBoardSchema>>;

  createList(
    groupId: string | number,
    boardId: number,
    labelId: number | string,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, IssueBoardListSchema>>;

  edit(
    groupId: string | number,
    boardId: number,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, ProjectIssueBoardSchema>>;

  editList(
    groupId: string | number,
    boardId: number,
    listId: number,
    position: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, IssueBoardListSchema>>;

  lists(
    groupId: string | number,
    boardId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, IssueBoardListSchema>[]>;

  remove(groupId: string | number, boardId: number, options?: Sudo): Promise<void>;

  removeList(
    groupId: string | number,
    boardId: number,
    listId: number,
    options?: Sudo,
  ): Promise<void>;

  show(
    groupId: string | number,
    boardId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, ProjectIssueBoardSchema>>;

  showList(
    groupId: string | number,
    boardId: number,
    listId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, IssueBoardListSchema>>;
}

export class ProjectIssueBoards<C extends boolean = false> extends ResourceIssueBoards<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('projects', options);
  }
}
