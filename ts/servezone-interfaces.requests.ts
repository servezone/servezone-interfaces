import * as plugins from './servezone-interfaces.plugins';

import * as versionManagerInterfaces from './servezone-interfaces.versionmanager';

export const versionManagerRoute: string = '/versionmanager';

// versionmanager
export interface IRequest_VersionUpdate {
  method: 'update';
  requestData: {
    dockerImageUrl: string;
    version: string;
  };
  responseData: {};
}

export interface IRequest_VersionGet {
  method: 'get';
  requestData: {
    dockerImageUrl: string;
  };
  responseData: versionManagerInterfaces.IVersionData;
}
