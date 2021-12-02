import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceVariables } from '../templates';
import { VariableSchema } from '../templates/types';
import { PaginatedRequestOptions, BaseRequestOptions, CamelizedResponse } from '../infrastructure';

export interface GroupVariables<C extends boolean = false> extends ResourceVariables<C> {
  all(
    groupId: string | number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, VariableSchema>[]>;

  create(
    groupId: string | number,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, VariableSchema>>;

  edit(
    groupId: string | number,
    key: string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, VariableSchema>>;

  show(
    groupId: string | number,
    key: string,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, VariableSchema>>;

  remove(groupId: string | number, key: string, options?: PaginatedRequestOptions): Promise<void>;
}

export class GroupVariables<C extends boolean = false> extends ResourceVariables<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('groups', options);
  }
}
