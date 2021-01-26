import * as clusterInterfaces from '../loint-cloudly.cluster';
import * as configInterfaces from '../loint-cloudly.config';

export interface IRequest_Any_Cloudly_ConfigManager_GetServerConfig {
  method: 'getServerConfig';
  request: {
    authToken: string;
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
  response: {
    status: 'inPayload' | 'retryIn1Minute';
    configData?: configInterfaces.IServerConfig;
  };
}

export interface IRequest_Any_Cloudly_ConfigManager_GetClusterConfig {
  method: 'getClusterConfig';
  request: {
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
  response: {
    configData: configInterfaces.IClusterConfig;
  };
}

export interface IRequest_Any_Cloudly_ConfigManager_PushClusterConfig {
  method: 'pushClusterConfig';
  request: {
    configData: configInterfaces.IClusterConfig;
  };
  response: {};
}
