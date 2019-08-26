import * as plugins from './servezone-interfaces.plugins';

import * as cloudlyConfigManagerInterfaces from './servezone-interfaces.cloudlyconfigmanager';
import * as cloudlyCoreflowManagerInterfaces from './servezone-interfaces.coreflow';
import * as cloudlyVersionManagerInterfaces from './servezone-interfaces.cloudlyversionmanager';

export const versionManagerRoute: string = '/versionmanager';

// for target cloudly
export interface IRequest_Any_Cloudly_VersionManager_Update {
  method: 'update';
  requestData: cloudlyVersionManagerInterfaces.IVersionData;
  responseData: {};
}

export interface IRequest_Any_Cloudly_VersionManager_Get {
  method: 'get';
  requestData: {
    dockerImageUrl: string;
  };
  responseData: cloudlyVersionManagerInterfaces.IVersionData;
}

export interface IRequest_Any_Cloudly_ConfigManager_Get {
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

/**
 * get the identity that then will be used to get the config
 */
export interface IRequest_Coreflow_Cloudly_CoreflowManager_Identity {
  method: 'identity';
  request: {};
  response: {
    clusterIdentifier: cloudlyCoreflowManagerInterfaces.IClusterIdentifier;
  };
}

/**
 * a status update dashboard
 */
export interface IRequest_Coreflow_Cloudly_CoreflowManager_Statusupdate {
  method: 'statusupdate';
  requestData: {
    clusterIdentifier: cloudlyCoreflowManagerInterfaces.IClusterIdentifier;
  };
  responseData: {};
}
