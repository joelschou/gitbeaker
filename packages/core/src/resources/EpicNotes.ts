import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceNotes } from '../templates';
import { NoteSchema } from '../templates/types';
import {
  PaginatedRequestOptions,
  BaseRequestOptions,
  Sudo,
  CamelizedResponse,
} from '../infrastructure';

export interface EpicNoteSchema extends NoteSchema {
  file_name: string;
  expires_at: string;
}

export interface EpicNotes<C extends boolean = false> extends ResourceNotes<C> {
  all(
    groupId: string | number,
    epicId: number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, EpicNoteSchema>[]>;

  create(
    groupId: string | number,
    epicId: number,
    body: string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, EpicNoteSchema>>;

  edit(
    groupId: string | number,
    epicId: number,
    noteId: number,
    body: string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, EpicNoteSchema>>;

  remove(groupId: string | number, epicId: number, noteId: number, options?: Sudo): Promise<void>;

  show(
    groupId: string | number,
    epicId: number,
    noteId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, EpicNoteSchema>>;
}

export class EpicNotes<C extends boolean = false> extends ResourceNotes<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('groups', 'epics', options);
  }
}
