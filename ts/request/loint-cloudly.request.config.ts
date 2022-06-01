import * as plugins from '../loint-cloudly.plugins.js';
import * as clusterInterfaces from '../loint-cloudly.cluster.js';
import * as configInterfaces from '../loint-cloudly.config.js';

export interface IRequest_Any_Cloudly_GetServerConfig
extends plugins.typedrequestInterfaces.implementsTR<
  plugins.typedrequestInterfaces.ITypedRequest,
  IRequest_Any_Cloudly_GetServerConfig
> {
  method: 'getServerConfig';
  request: {
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
  response: {
    configData: configInterfaces.IServerConfig;
  };
}

export interface IRequest_Any_Cloudly_GetClusterConfig
extends plugins.typedrequestInterfaces.implementsTR<
  plugins.typedrequestInterfaces.ITypedRequest,
  IRequest_Any_Cloudly_GetClusterConfig
> {
  method: 'getClusterConfig';
  request: {
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
  response: {
    configData: configInterfaces.IClusterConfig;
  };
}

export interface IRequest_Cloudly_Coreflow_PushClusterConfig
extends plugins.typedrequestInterfaces.implementsTR<
  plugins.typedrequestInterfaces.ITypedRequest,
  IRequest_Cloudly_Coreflow_PushClusterConfig
> {
  method: 'pushClusterConfig';
  request: {
    configData: configInterfaces.IClusterConfig;
  };
  response: {};
}

export interface IRequest_Cloudly_Coreflow_PushContainerUpdate
extends plugins.typedrequestInterfaces.implementsTR<
  plugins.typedrequestInterfaces.ITypedRequest,
  IRequest_Cloudly_Coreflow_PushContainerUpdate
> {
  method: 'pushContainerUpdate'
  request: {
    configData: configInterfaces.IClusterConfig;
    specificContainerConfigToUpdate: configInterfaces.IClusterConfigContainer;
  };
  response: {}
}
