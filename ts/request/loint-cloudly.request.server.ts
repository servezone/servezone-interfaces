// link external types for reference
import { IRequest_Any_Cloudly_ConfigManager_GetServerConfig } from './loint-cloudly.request.config'

import * as plugins from '../loint-cloudly.plugins';

export interface IRequest_Cloudly_ServerConfig_TriggerAction
  extends plugins.typedrequestInterfaces.implementsTR<
    plugins.typedrequestInterfaces.ITypedRequest,
    IRequest_Cloudly_ServerConfig_TriggerAction
  > {
  method: 'serverConfigTriggerAction';
  request: {
    actionName: 'reboot' | 'rebuild';
    payload: any;
  };
  response: {
    actionConfirmed: boolean;  
  };
}