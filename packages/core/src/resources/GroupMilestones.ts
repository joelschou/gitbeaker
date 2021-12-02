import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceMilestones } from '../templates';
import { MilestoneSchema } from '../templates/types';
import {
  PaginatedRequestOptions,
  BaseRequestOptions,
  Sudo,
  CamelizedResponse,
} from '../infrastructure';
import { IssueSchema } from './Issues';
import { MergeRequestSchema } from './MergeRequests';

export interface GroupMilestones<C extends boolean = false> extends ResourceMilestones<C> {
  all(
    groupId: string | number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, MilestoneSchema>[]>;

  create(
    groupId: string | number,
    title: string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, MilestoneSchema>>;

  edit(
    groupId: string | number,
    milestoneId: number,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, MilestoneSchema>>;

  issues(
    groupId: string | number,
    milestoneId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, IssueSchema>[]>;

  mergeRequests(
    groupId: string | number,
    milestoneId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, MergeRequestSchema>[]>;

  show(
    groupId: string | number,
    milestoneId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, MilestoneSchema>>;
}

export class GroupMilestones<C extends boolean = false> extends ResourceMilestones<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('groups', options);
  }
}
