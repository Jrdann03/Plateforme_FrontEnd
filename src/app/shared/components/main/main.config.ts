import { StoreSectionConfig } from '../sections/sections.config';

export interface StoreMainConfig {
  sections: StoreSectionConfig[];
}

export type StoreMainConfigInput = {
  sections?: StoreSectionConfig[];
};

export const DEFAULT_MAIN_CONFIG: StoreMainConfig = {
  sections: [],
};