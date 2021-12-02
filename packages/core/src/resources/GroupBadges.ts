import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceBadges } from '../templates';
import { BadgeSchema } from '../templates/types';
import {
  BaseRequestOptions,
  PaginatedRequestOptions,
  Sudo,
  CamelizedResponse,
} from '../infrastructure';

export interface GroupBadgeSchema extends BadgeSchema {
  kind: 'group';
}

export interface GroupBadges<C extends boolean = false> extends ResourceBadges<C> {
  add(
    groupId: string | number,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, GroupBadgeSchema>>;

  all(
    groupId: string | number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, GroupBadgeSchema>[]>;

  edit(
    groupId: string | number,
    badgeId: number,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, GroupBadgeSchema>>;

  preview(
    groupId: string | number,
    linkUrl: string,
    imageUrl: string,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, Omit<GroupBadgeSchema, 'id' | 'name' | 'kind'>>>;

  remove(groupId: string | number, badgeId: number, options?: Sudo): Promise<void>;

  show(
    groupId: string | number,
    badgeId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, GroupBadgeSchema>>;
}

export class GroupBadges<C extends boolean = false> extends ResourceBadges<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('groups', options);
  }
}
