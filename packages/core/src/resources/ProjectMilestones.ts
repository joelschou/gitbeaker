import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { IssueSchema } from './Issues';
import { MergeRequestSchema } from './MergeRequests';
import { ResourceMilestones } from '../templates';
import { MilestoneSchema } from '../templates/types';
import {
  PaginatedRequestOptions,
  BaseRequestOptions,
  Sudo,
  CamelizedResponse,
} from '../infrastructure';

export interface ProjectMilestones<C extends boolean = false> extends ResourceMilestones<C> {
  all(
    projectId: string | number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, MilestoneSchema>[]>;

  create(
    projectId: string | number,
    title: string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, MilestoneSchema>>;

  edit(
    projectId: string | number,
    milestoneId: number,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, MilestoneSchema>>;

  issues(
    projectId: string | number,
    milestoneId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, IssueSchema>[]>;

  mergeRequests(
    projectId: string | number,
    milestoneId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, MergeRequestSchema>[]>;

  show(
    projectId: string | number,
    milestoneId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, MilestoneSchema>>;
}

export class ProjectMilestones<C extends boolean = false> extends ResourceMilestones<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('projects', options);
  }
}
