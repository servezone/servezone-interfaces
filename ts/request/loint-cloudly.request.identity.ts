import * as clusterInterfaces from '../loint-cloudly.cluster';

// ========
// IDENTITY
// ========

/**
 * get the identity that then will be used to get the config
 */
export interface IRequest_Any_Cloudly_CoreflowManager_GetIdentitybyJumpCode {
  method: 'getIdentitybyJumpCode';
  request: {
    jumpCode: string;
  };
  response: {
    clusterIdentifier: clusterInterfaces.IClusterIdentifier;
  };
}
