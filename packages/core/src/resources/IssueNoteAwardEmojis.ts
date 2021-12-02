import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceNoteAwardEmojis } from '../templates';
import { AwardEmojiSchema } from '../templates/types';
import { PaginatedRequestOptions, CamelizedResponse, Sudo } from '../infrastructure';

export interface IssueNoteAwardEmojis<C extends boolean = false>
  extends ResourceNoteAwardEmojis<C> {
  all(
    projectId: string | number,
    issueIId: number,
    noteId: number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, AwardEmojiSchema>[]>;

  award(
    projectId: string | number,
    issueIId: number,
    noteId: number,
    name: string,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, AwardEmojiSchema>>;

  remove(
    projectId: string | number,
    issueIId: number,
    noteId: number,
    awardId: number,
    options?: Sudo,
  ): Promise<void>;

  show(
    projectId: string | number,
    issueIId: number,
    noteId: number,
    awardId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, AwardEmojiSchema>>;
}

export class IssueNoteAwardEmojis<C extends boolean = false> extends ResourceNoteAwardEmojis<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('issues', options);
  }
}
