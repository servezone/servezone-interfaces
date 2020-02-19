import * as plugins from './loint-cluster.plugins';
import { IVersionData } from './loint-cluster.version';

export interface IReactionRequest_Cloudly_Coreflow_UpdateContainerVersions {
  method: 'postNewContainerVersions';
  request: {
    containerVersions: IVersionData[];
  };
}
