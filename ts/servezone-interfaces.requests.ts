import * as plugins from './servezone-interfaces.plugins';

import * as versionManagerInterfaces from './servezone-interfaces.versionmanager';

export const versionManagerRoute: string = '/versionmanager';

// versionmanager
export interface IRequest_versionUpdate {
  method: 'update';
  requestData: {
    dockerImageUrl: string;
    version: string;
  };
  responseData: {};
}

export interface IRequest_versionGet {
  method: 'get';
  requestData: {
    dockerImageUrl: string;
  };
  responseData: versionManagerInterfaces.IVersionData;
}
