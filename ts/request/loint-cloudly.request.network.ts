import * as plugins from '../loint-cloudly.plugins';

export interface IRequest_Any_Cloudly_GetNetworkNodes {
  method: 'getNetworkNodes';
  request: {};
  response: {
    networkNodes: plugins.tsclass.network.INetworkNode[];
  };
}
