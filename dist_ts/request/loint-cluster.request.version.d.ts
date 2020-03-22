import * as versionInterfaces from '../loint-cluster.version';
export interface IRequest_Any_Cloudly_VersionManager_Update {
    method: 'update';
    request: versionInterfaces.IVersionData;
    response: {};
}
export interface IRequest_Any_Cloudly_VersionManager_Get {
    method: 'get';
    request: {
        dockerImageUrl: string;
    };
    response: versionInterfaces.IVersionData;
}
