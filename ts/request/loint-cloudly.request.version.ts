import * as versionInterfaces from '../loint-cloudly.version.js';

// Containers
export interface IRequest_Any_Cloudly_VersionManager_InformCloudlyAboutNewContainerVersion {
  method: 'informCloudlyAboutNewContainerVersion';
  request: versionInterfaces.IContainerVersionData;
  response: {};
}

// Containers
export interface IRequest_Cloudly_Coreflow_VersionManager_InformCoreflowAboutNewContainerVersion {
  method: 'informCoreflowAboutNewContainerVersion';
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
