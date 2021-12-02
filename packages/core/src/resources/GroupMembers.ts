import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceMembers } from '../templates';
import { MemberSchema, AccessLevel, IncludeInherited } from '../templates/types';
import {
  BaseRequestOptions,
  PaginatedRequestOptions,
  CamelizedResponse,
  Sudo,
} from '../infrastructure';

export interface GroupMembers<C extends boolean = false> extends ResourceMembers<C> {
  add(
    groupId: string | number,
    userId: number,
    accessLevel: AccessLevel,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, MemberSchema>>;

  all(
    groupId: string | number,
    options?: IncludeInherited & PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, MemberSchema>[]>;

  edit(
    groupId: string | number,
    userId: number,
    accessLevel: AccessLevel,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, MemberSchema>>;

  show(
    groupId: string | number,
    userId: number,
    options?: IncludeInherited & Sudo,
  ): Promise<CamelizedResponse<C, MemberSchema>>;

  remove(groupId: string | number, userId: number, options?: Sudo): Promise<void>;
}

export class GroupMembers<C extends boolean = false> extends ResourceMembers<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('groups', options);
  }
}
