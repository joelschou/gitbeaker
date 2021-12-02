import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceTemplates } from '../templates';
import { PaginatedRequestOptions, Sudo, CamelizedResponse } from '../infrastructure';

export interface LicenseTemplateSchema extends Record<string, unknown> {
  key: string;
  name: string;
  nickname?: string;
  featured: boolean;
  html_url: string;
  source_url: string;
  description: string;
  conditions?: string[];
  permissions?: string[];
  limitations?: string[];
  content: string;
}

export interface LicenseTemplates<C extends boolean = false> extends ResourceTemplates<C> {
  all(options?: PaginatedRequestOptions): Promise<CamelizedResponse<C, LicenseTemplateSchema>[]>;
  show(key: string | number, options?: Sudo): Promise<CamelizedResponse<C, LicenseTemplateSchema>>;
}

export class LicenseTemplates<C extends boolean = false> extends ResourceTemplates<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('Licenses', options);
  }
}
