import * as plugins from './servezone-interfaces.plugins';

import * as cloudlyConfigManagerInterfaces from './servezone-interfaces.cloudlyconfigmanager';
import * as cloudlyCoreflowManagerInterfaces from './servezone-interfaces.coreflow';
import * as cloudlyVersionManagerInterfaces from './servezone-interfaces.cloudlyversionmanager';

export const versionManagerRoute: string = '/versionmanager';

// cloudly Versionmanager
export interface ITypedRequest_Any_VersionUpdate {
  method: 'update';
  requestData: cloudlyVersionManagerInterfaces.IVersionData;
  responseData: {};
}

export interface ITypedRequest_Any_VersionGet {
  method: 'get';
  requestData: {
    dockerImageUrl: string;
  };
  responseData: cloudlyVersionManagerInterfaces.IVersionData;
}

// cloudly ConfigManager
export interface ITypedRequest_Any_ConfigGet {
  method: 'get';
  requestData: {
    type: cloudlyConfigManagerInterfaces.TConfigType;
    configIdentifier: string;
  };
  responseData: {
    configIdentifier: string;
    configData:
      | cloudlyConfigManagerInterfaces.IServerConfig
      | cloudlyConfigManagerInterfaces.ICloreflowConfig
      | cloudlyConfigManagerInterfaces.IAppConfig;
  };
}

// cloudly Coreflow

/**
 * get the identity that then will be used to get the config
 */
export interface ITypedRequest_Coreflow_ConfigIdentity {
  method: 'identity';
  request: {};
  response: {
    clusterIdentifier: cloudlyCoreflowManagerInterfaces.IClusterIdentifier;
  };
}

/**
 * a status update dashboard
 */
export interface ITypedRequest_CoreflowconfigStatusupdate {
  method: 'statusupdate';
  requestData: {
    clusterIdentifier: cloudlyCoreflowManagerInterfaces.IClusterIdentifier;
  };
  responseData: {};
}

// ServerConfig
