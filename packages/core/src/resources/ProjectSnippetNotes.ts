import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceNotes } from '../templates';
import { NoteSchema } from '../templates/types';
import {
  PaginatedRequestOptions,
  BaseRequestOptions,
  Sudo,
  CamelizedResponse,
} from '../infrastructure';

export interface SnippetNoteSchema extends NoteSchema {
  file_name: string;
  expires_at: string;
}

export interface ProjectSnippetNotes<C extends boolean = false> extends ResourceNotes<C> {
  all(
    projectId: string | number,
    snippetId: string | number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, SnippetNoteSchema>[]>;

  create(
    projectId: string | number,
    snippetId: string | number,
    body: string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, SnippetNoteSchema>>;

  edit(
    projectId: string | number,
    snippetId: string | number,
    noteId: number,
    body: string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, SnippetNoteSchema>>;

  remove(
    projectId: string | number,
    snippetId: string | number,
    noteId: number,
    options?: Sudo,
  ): Promise<void>;

  show(
    projectId: string | number,
    snippetId: string | number,
    noteId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, SnippetNoteSchema>>;
}

export class ProjectSnippetNotes<C extends boolean = false> extends ResourceNotes<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('projects', 'snippets', options);
  }
}
