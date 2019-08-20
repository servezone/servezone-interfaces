import * as plugins from './servezone-interfaces.plugins';

import * as cloudlyConfigManagerInterfaces from './servezone-interfaces.cloudlyconfigmanager';
import * as cloudlyCoreflowManagerInterfaces from './servezone-interfaces.coreflow';
import * as cloudlyVersionManagerInterfaces from './servezone-interfaces.cloudlyversionmanager';

export const versionManagerRoute: string = '/versionmanager';

// cloudly Versionmanager
export interface IRequest_VersionUpdate {
  method: 'update';
  requestData: cloudlyVersionManagerInterfaces.IVersionData;
  responseData: {};
}

export interface IRequest_VersionGet {
  method: 'get';
  requestData: {
    dockerImageUrl: string;
  };
  responseData: cloudlyVersionManagerInterfaces.IVersionData;
}

// cloudly ConfigManager
export interface IRequest_ConfigGet {
  method: 'get';
  requestData: {
    type: cloudlyConfigManagerInterfaces.TConfigType;
    configIdentifier: string
  };
  responseData: {
    configIdentifier: string;
    configData: | cloudlyConfigManagerInterfaces.IServerConfig
    | cloudlyConfigManagerInterfaces.ICloreflowConfig
    | cloudlyConfigManagerInterfaces.IAppConfig;
  };
}

// cloudly CoreflowManager

/**
 * get the identity that then will be used to get the config
 */
export interface IRequest_CoreflowConfigIdentity {
  method: 'identity';
  request: {};
  response: {
    clusterIdentifier: cloudlyCoreflowManagerInterfaces.IClusterIdentifier;
  };
}

/**
 * a status update dashboard
 */
export interface IRequest_CoreflowconfigStatusupdate {
  method: 'statusupdate';
  requestData: {
    clusterIdentifier: cloudlyCoreflowManagerInterfaces.IClusterIdentifier;
  };
  responseData: {};
}
