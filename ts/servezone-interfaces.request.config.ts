import * as clusterInterfaces from './servezone-interfaces.cluster';
import * as configInterfaces from './servezone-interfaces.config';

export interface IRequest_Any_Cloudly_ConfigManager_GetServerConfig {
  method: 'getServerConfig';
  request: {
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
  response: {
    configIdentifier: string;
    configData:
      | configInterfaces.IServerConfig
      | configInterfaces.ICloreflowConfig
      | configInterfaces.IServiceConfig;
  };
}

export interface IRequest_Any_Cloudly_ConfigManager_GetClusterConfig {
  method: 'getClusterConfig';
  request: {
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
  response: {
    configIdentifier: string;
    configData:
      | configInterfaces.IServerConfig
      | configInterfaces.ICloreflowConfig
      | configInterfaces.IServiceConfig;
  };
}