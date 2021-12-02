import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceDiscussions } from '../templates';
import { DiscussionSchema } from '../templates/types';
import {
  BaseRequestOptions,
  PaginatedRequestOptions,
  Sudo,
  CamelizedResponse,
} from '../infrastructure';

export interface EpicDiscussions<C extends boolean = false> extends ResourceDiscussions<C> {
  addNote(
    groupId: string | number,
    epicId: number,
    discussionId: number,
    noteId: number,
    body: string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, DiscussionSchema>>;

  all(
    groupId: string | number,
    epicId: number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, DiscussionSchema>[]>;

  create(
    groupId: string | number,
    epicId: number,
    body: string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, DiscussionSchema>>;

  editNote(
    groupId: string | number,
    epicId: number,
    discussionId: number,
    noteId: number,
    options: BaseRequestOptions & { body: string },
  ): Promise<CamelizedResponse<C, DiscussionSchema>>;

  removeNote(
    groupId: string | number,
    epicId: number,
    discussionId: number,
    noteId: number,
    options?: Sudo,
  ): Promise<void>;

  show(
    groupId: string | number,
    epicId: number,
    discussionId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, DiscussionSchema>>;
}

export class EpicDiscussions<C extends boolean = false> extends ResourceDiscussions<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('groups', 'epics', options);
  }
}
