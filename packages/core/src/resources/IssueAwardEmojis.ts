import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceAwardEmojis } from '../templates';
import { AwardEmojiSchema } from '../templates/types';
import { PaginatedRequestOptions, Sudo, CamelizedResponse } from '../infrastructure';

export interface IssueAwardEmojis<C extends boolean = false> extends ResourceAwardEmojis<C> {
  all(
    projectId: string | number,
    issueIId: number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, AwardEmojiSchema>[]>;

  award(
    projectId: string | number,
    issueIId: number,
    name: string,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, AwardEmojiSchema>>;

  remove(
    projectId: string | number,
    issueIId: number,
    awardId: number,
    options?: Sudo,
  ): Promise<void>;

  show(
    projectId: string | number,
    issueIId: number,
    awardId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, AwardEmojiSchema>>;
}

export class IssueAwardEmojis<C extends boolean = false> extends ResourceAwardEmojis<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('issues', options);
  }
}
