import { IAppJSON } from 'smartapp';
/**
 * the socket function interface for adding an app to a servezone cluster
 */
export interface ISocketAddApp {
    shipzoneData: any;
    appJSON: IAppJSON;
}
/**
 * the socket function interface for updating an app
 */
export interface ISocketUpdateApp {
    shipzoneData: any;
    appJSON: IAppJSON;
}
/**
 * the socket function interface for checking for an app
 */
export interface ISocketCheckApp {
    shipzoneData: any;
    appJSON: IAppJSON;
}
