import * as plugins from './servezone-interfaces.plugins'

// interfaces
import {IAppJSON} from 'smartapp'

/**
 * the socket function interface for adding an app to a servezone cluster
 */
export interface ISocketAddApp {
  shipzoneData
  appJSON: IAppJSON
}

/**
 * the socket function interface for updating an app
 */
export interface ISocketUpdateApp {
  shipzoneData
  appJSON: IAppJSON
}

/**
 * the socket function interface for checking for an app
 */
export interface ISocketCheckApp {

}
