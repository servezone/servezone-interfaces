// link external types for reference
import { IRequest_Any_Cloudly_GetServerConfig } from './loint-cloudly.request.config.js'

import * as plugins from '../loint-cloudly.plugins.js';

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