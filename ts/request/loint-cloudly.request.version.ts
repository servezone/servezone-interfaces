import * as versionInterfaces from '../loint-cloudly.version';

// Containers
export interface IRequest_Any_Cloudly_VersionManager_InformAboutNewContainerVersion {
  method: 'informAboutNewContainerVersion';
  request: versionInterfaces.IContainerVersionData;
  response: {};
}

export interface IRequest_Any_Cloudly_VersionManager_GetLatestContainerVersion {
  method: 'getLatestContainerVersion';
  request: {
    dockerImageUrl: string;
  };
  response: versionInterfaces.IContainerVersionData;
}

export interface IRequest_Any_Cloudly_VersionManager_ListAllContainerVersions {
  method: 'listAllContainerVersions';
  request: {};
  response: versionInterfaces.IContainerVersionData[];
}
