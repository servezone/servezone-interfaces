import * as clusterInterfaces from './servezone-interfaces.cluster';
import * as configInterfaces from './servezone-interfaces.config';

export interface IRequest_Any_Cloudly_ConfigManager_GetServerConfig {
  method: 'getServerConfig';
  request: {
    jumpCode: string;
  };
  response: {
    configData: configInterfaces.IServerConfig
  };
}

export interface IRequest_Any_Cloudly_ConfigManager_GetClusterConfig {
  method: 'getClusterConfig';
  request: {
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
  response: {
    configData: configInterfaces.IClusterConfig
  };
}