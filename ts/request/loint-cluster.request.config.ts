import * as clusterInterfaces from '../loint-cluster.cluster';
import * as configInterfaces from '../loint-cluster.config';

export interface IRequest_Any_Cloudly_ConfigManager_GetServerConfig {
  method: 'getServerConfig';
  request: {
    authToken: string;
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
  response: {
    status: "inPayload" | "retryIn1Minute"
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
