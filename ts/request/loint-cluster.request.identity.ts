import * as clusterInterfaces from '../loint-cluster.cluster';

// ========
// IDENTITY
// ========

/**
 * get the identity that then will be used to get the config
 */
export interface IRequest_Serverconfig_Cloudly_ServerconfigManager_Identity {
  method: 'identity';
  request: {
    jumpCode: string;
  };
  response: {
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
}

/**
 * get the identity that then will be used to get the config
 */
export interface IRequest_Coreflow_Cloudly_CoreflowManager_Identity {
  method: 'identity';
  request: {
    jumpCode: string;
  };
  response: {
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
}
