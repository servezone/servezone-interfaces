import * as plugins from './loint-cluster.plugins';

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
