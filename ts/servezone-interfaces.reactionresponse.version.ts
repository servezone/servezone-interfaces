import * as plugins from './servezone-interfaces.plugins';
import { IVersionData } from './servezone-interfaces.version';

export interface IReactionRequest_Cloudly_Coreflow_UpdateContainerVersions {
  method: 'postNewContainerVersions';
  request: {
    containerVersions: IVersionData[];
  };
}
