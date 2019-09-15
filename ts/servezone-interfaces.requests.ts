import * as plugins from './servezone-interfaces.plugins';

import * as clusterInterfaces from './servezone-interfaces.cluster';
import * as configInterfaces from './servezone-interfaces.config';
import * as versionInterfaces from './servezone-interfaces.version';

export const versionManagerRoute: string = '/versionmanager';

// for target cloudly
export interface IRequest_Any_Cloudly_VersionManager_Update {
  method: 'update';
  request: versionInterfaces.IVersionData;
  response: {};
}

export interface IRequest_Any_Cloudly_VersionManager_Get {
  method: 'get';
  request: {
    dockerImageUrl: string;
  };
  response: versionInterfaces.IVersionData;
}

export interface IRequest_Any_Cloudly_ConfigManager_Get {
  method: 'get';
  request: {
    type: configInterfaces.TConfigType;
    configIdentifier: string;
  };
  response: {
    configIdentifier: string;
    configData:
      | configInterfaces.IServerConfig
      | configInterfaces.ICloreflowConfig
      | configInterfaces.IServiceConfig;
  };
}

/**
 * get the identity that then will be used to get the config
 */
export interface IRequest_Coreflow_Cloudly_CoreflowManager_Identity {
  method: 'identity';
  request: {};
  response: {
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
}

/**
 * a status update dashboard
 */
export interface IRequest_Coreflow_Cloudly_CoreflowManager_Statusupdate {
  method: 'statusupdate';
  request: {
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
  response: {};
}

export interface IRequest_Serverconfig_Cloudly_ServerconfigManager_Identity {
  method: 'identity';
  request: {};
  response: {
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
}
