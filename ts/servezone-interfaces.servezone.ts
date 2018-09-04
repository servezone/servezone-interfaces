import * as plugins from './servezone-interfaces.plugins';

// interfaces
import { IAppJSON } from 'smartapp';
import { IShipZoneData } from './servezone-interfaces.shipzone';

/**
 * the socket function interface for adding an app to a servezone cluster
 */
export interface ISocketAddApp {
  shipzoneData: IShipZoneData;
  appJSON: IAppJSON;
}

/**
 * the socket function interface for updating an app
 */
export interface ISocketUpdateApp {
  shipzoneData: IShipZoneData;
  appJSON: IAppJSON;
}

/**
 * the socket function interface for checking for an app
 */
export interface ISocketCheckApp {
  shipzoneData: IShipZoneData;
  appJSON: IAppJSON;
}
