import * as plugins from './servezone-interfaces.plugins';

import * as coreflowManagerInterfaces from './servezone-interfaces.cloudlycoreflowmanager';
import * as versionManagerInterfaces from './servezone-interfaces.cloudlyversionmanager';

export const versionManagerRoute: string = '/versionmanager';

// cloudlyversionmanager
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

// cloudlyConfigManager
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

// cloudlyCoreflowmanager
export interface IRequest_CoreflowconfigIdentity {
  method: 'identity',
  request: {};
  response: {
    clusterIdentifier: coreflowManagerInterfaces.IClusterIdentifier;
  };
}

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
  responseData: {};
}
