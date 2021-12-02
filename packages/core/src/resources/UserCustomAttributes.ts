import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceCustomAttributes } from '../templates';
import { CustomAttributeSchema } from '../templates/types';
import { PaginatedRequestOptions, CamelizedResponse, Sudo } from '../infrastructure';

export interface UserCustomAttributes<C extends boolean = false>
  extends ResourceCustomAttributes<C> {
  all(
    userId: string | number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, CustomAttributeSchema>[]>;

  set(
    userId: string | number,
    customAttributeId: number,
    value: string,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, CustomAttributeSchema>>;

  remove(userId: string | number, customAttributeId: number, options?: Sudo): Promise<void>;

  show(
    userId: string | number,
    customAttributeId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, CustomAttributeSchema>>;
}

export class UserCustomAttributes<C extends boolean = false> extends ResourceCustomAttributes<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('users', options);
  }
}
