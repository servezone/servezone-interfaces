import * as plugins from './servezone-interfaces.plugins';

export interface IClusterStatus {
  name: string;
  ip: string;
  nodesCount: number;
  containersUnderManagementCount: number;
  nodeStatusId: string;
  containerStatusArray: IContainerStatus[];
}

export interface INodeStatus {
  nodeId: string;
}

export interface IContainerStatus {
  serviceName: string;
  dockerImageUrl: string;
  dockerImageVersion: string;
}
