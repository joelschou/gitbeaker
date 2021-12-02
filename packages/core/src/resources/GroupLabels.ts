import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import {
  BaseRequestOptions,
  PaginatedRequestOptions,
  CamelizedResponse,
  Sudo,
} from '../infrastructure';
import { ResourceLabels } from '../templates';
import { LabelSchema } from '../templates/types';

export interface GroupLabels<C extends boolean = false> extends ResourceLabels<C> {
  all(
    groupId: string | number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, LabelSchema>[]>;

  create(
    groupId: string | number,
    labelName: string,
    color: string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, LabelSchema>>;

  edit(
    groupId: string | number,
    labelId: number | string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, LabelSchema>>;

  remove(groupId: string | number, labelId: number | string, options?: Sudo): Promise<void>;

  subscribe(
    groupId: string | number,
    labelId: number | string,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, LabelSchema>>;

  unsubscribe(
    groupId: string | number,
    labelId: number | string,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, LabelSchema>>;
}

export class GroupLabels<C extends boolean = false> extends ResourceLabels<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('groups', options);
  }
}
