import { IReverseProxyConfig } from './loint-cluster.traffic';

export interface IRequest_Coreflow_Coretraffic_RoutingUpdate {
  method: 'updateRouting';
  request: {
    reverseConfigs: IReverseProxyConfig[];
  };
  response: {
    status: 'ok' | 'error';
    errorText: string;
  };
}
