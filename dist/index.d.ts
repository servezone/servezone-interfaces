import { IAppJSON } from 'smartapp';
/**
 * the interface for adding an app to a servezone cluster
 */
export interface addApp {
    shipzoneData: any;
    appJSON: IAppJSON;
}
export interface updateApp {
    shipzoneData: any;
    appJSON: IAppJSON;
}
