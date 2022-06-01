import * as clusterInterfaces from '../loint-cloudly.cluster.js';

/**
 * a status update dashboard
 */
export interface IRequest_Coreflow_Cloudly_CoreflowManagerStatusupdate {
  method: 'cloudlyStatus';
  request: {
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
  response: {};
}
