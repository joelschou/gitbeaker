import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceCustomAttributes } from '../templates';
import { CustomAttributeSchema } from '../templates/types';
import { PaginatedRequestOptions, Sudo, CamelizedResponse } from '../infrastructure';

export interface GroupCustomAttributes<C extends boolean = false>
  extends ResourceCustomAttributes<C> {
  all(
    groupId: string | number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, CustomAttributeSchema>[]>;

  set(
    groupId: string | number,
    customAttributeId: number,
    value: string,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, CustomAttributeSchema>>;

  remove(groupId: string | number, customAttributeId: number, options?: Sudo): Promise<void>;

  show(
    groupId: string | number,
    customAttributeId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, CustomAttributeSchema>>;
}

export class GroupCustomAttributes<C extends boolean = false> extends ResourceCustomAttributes<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('groups', options);
  }
}
