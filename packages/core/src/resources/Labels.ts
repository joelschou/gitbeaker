import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import {
  BaseRequestOptions,
  PaginatedRequestOptions,
  CamelizedResponse,
  Sudo,
} from '../infrastructure';
import { ResourceLabels } from '../templates';
import { LabelSchema } from '../templates/types';

export interface Labels<C extends boolean = false> extends ResourceLabels<C> {
  all(
    projectId: string | number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, LabelSchema>[]>;

  create(
    projectId: string | number,
    labelName: string,
    color: string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, LabelSchema>>;

  edit(
    projectId: string | number,
    labelId: number | string,
    options?: BaseRequestOptions,
  ): Promise<CamelizedResponse<C, LabelSchema>>;

  remove(projectId: string | number, labelId: number | string, options?: Sudo): Promise<void>;

  subscribe(
    projectId: string | number,
    labelId: number | string,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, LabelSchema>>;

  unsubscribe(
    projectId: string | number,
    labelId: number | string,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, LabelSchema>>;
}

export class Labels<C extends boolean = false> extends ResourceLabels<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('projects', options);
  }
}
