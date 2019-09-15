import * as configInterfaces from './servezone-interfaces.config';

export interface IRequest_Any_Cloudly_ConfigManager_Get {
  method: 'get';
  request: {
    type: configInterfaces.TConfigType;
    configIdentifier: string;
  };
  response: {
    configIdentifier: string;
    configData:
      | configInterfaces.IServerConfig
      | configInterfaces.ICloreflowConfig
      | configInterfaces.IServiceConfig;
  };
}