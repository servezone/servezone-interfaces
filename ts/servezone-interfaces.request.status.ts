import * as clusterInterfaces from './servezone-interfaces.cluster';

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
