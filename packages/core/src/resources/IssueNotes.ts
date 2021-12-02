import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceNotes } from '../templates';
import { NoteSchema } from '../templates/types';
import {
  PaginatedRequestOptions,
  BaseRequestOptions,
  Sudo,
  CamelizedResponse,
} from '../infrastructure';

export interface IssueNoteSchema extends NoteSchema {
  attachment?: string;
  system: boolean;
  noteable_id: number;
  noteable_type: string;
  noteable_iid: number;
  resolvable: boolean;
}

export interface IssueNotes<C extends boolean = false> extends ResourceNotes<C> {
  all(
    projectId: string | number,
    issueIId: number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, IssueNoteSchema>[]>;

  create(
    projectId: string | number,
    issueIId: number,
    body: string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, IssueNoteSchema>>;

  edit(
    projectId: string | number,
    issueIId: number,
    noteId: number,
    body: string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, IssueNoteSchema>>;

  remove(
    projectId: string | number,
    issueIId: number,
    noteId: number,
    options?: Sudo,
  ): Promise<void>;

  show(
    projectId: string | number,
    issueIId: number,
    noteId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, IssueNoteSchema>>;
}

export class IssueNotes<C extends boolean = false> extends ResourceNotes<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('projects', 'issues', options);
  }
}
