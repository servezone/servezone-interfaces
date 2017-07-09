import * as plugins from './servezone-interfaces.plugins'

// interfaces
import {IAppJSON} from 'smartapp'

/**
 * the interface for adding an app to a servezone cluster
 */
export interface addApp {
  shipzoneData
  appJSON: IAppJSON
}

export interface updateApp {
  shipzoneData
  appJSON: IAppJSON
}
