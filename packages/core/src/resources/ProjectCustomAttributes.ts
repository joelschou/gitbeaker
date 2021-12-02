import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceCustomAttributes } from '../templates';
import { CustomAttributeSchema } from '../templates/types';
import { PaginatedRequestOptions, CamelizedResponse, Sudo } from '../infrastructure';

export interface ProjectCustomAttributes<C extends boolean = false>
  extends ResourceCustomAttributes<C> {
  all(
    projectId: string | number,
    options?: PaginatedRequestOptions,
  ): Promise<CamelizedResponse<C, CustomAttributeSchema>[]>;

  set(
    projectId: string | number,
    customAttributeId: number,
    value: string,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, CustomAttributeSchema>>;

  remove(projectId: string | number, customAttributeId: number, options?: Sudo): Promise<void>;

  show(
    projectId: string | number,
    customAttributeId: number,
    options?: Sudo,
  ): Promise<CamelizedResponse<C, CustomAttributeSchema>>;
}

export class ProjectCustomAttributes<C extends boolean> extends ResourceCustomAttributes<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('projects', options);
  }
}
