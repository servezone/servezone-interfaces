import * as clusterInterfaces from './loint-cluster.cluster';

/**
 * a status update dashboard
 */
export interface IRequest_Coreflow_Cloudly_CoreflowManagerStatusupdate {
  method: 'statusupdate';
  request: {
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
  response: {};
}
