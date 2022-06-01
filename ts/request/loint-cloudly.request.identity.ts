import * as plugins from '../loint-cloudly.plugins.js';
import * as clusterInterfaces from '../loint-cloudly.cluster.js';

// ========
// IDENTITY
// ========

/**
 * get the identity that then will be used to get the config
 */
export interface IRequest_Any_Cloudly_CoreflowManager_GetIdentityByJumpCode
extends plugins.typedrequestInterfaces.implementsTR<
  plugins.typedrequestInterfaces.ITypedRequest,
  IRequest_Any_Cloudly_CoreflowManager_GetIdentityByJumpCode
> {
  method: 'getIdentityByJumpCode';
  request: {
    jumpCode: string;
  };
  response: {
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
}
