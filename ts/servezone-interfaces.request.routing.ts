import { IReverseProxyConfig } from './servezone-interfaces.traffic';

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