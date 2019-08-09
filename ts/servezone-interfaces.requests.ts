import * as plugins from './servezone-interfaces.plugins';

import * as coreflowManagerInterfaces from './servezone-interfaces.coreflowmanager';
import * as versionManagerInterfaces from './servezone-interfaces.versionmanager';

export const versionManagerRoute: string = '/versionmanager';

// versionmanager
export interface IRequest_VersionUpdate {
  method: 'update';
  requestData: versionManagerInterfaces.IVersionData;
  responseData: {};
}

export interface IRequest_VersionGet {
  method: 'get';
  requestData: {
    dockerImageUrl: string;
  };
  responseData: versionManagerInterfaces.IVersionData;
}

// configManager
export interface IRequest_ConfigGet {
  method: 'get';
  requestData: {
    configIdentifier: string;
  };
  responseData: {
    configIdentifier: string;
    configData: any;
  };
}

// coreflowmanager
export interface IRequest_CoreflowconfigGet {
  method: 'get';
  requestData: {
    clusterIdentifier: coreflowManagerInterfaces.IClusterIdentifier;
  };
  responseData: {};
}

export interface IRequest_CoreflowconfigStatusupdate {
  method: 'statusupdate';
  requestData: {
    clusterIdentifier: coreflowManagerInterfaces.IClusterIdentifier;
  };
  responseData: {

  };
}