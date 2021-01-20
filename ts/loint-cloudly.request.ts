import * as plugins from './loint-cloudly.plugins';

import * as certificateRequests from './request/loint-cloudly.request.certificate';
import * as configRequests from './request/loint-cloudly.request.config';
import * as identityRequests from './request/loint-cloudly.request.identity';
import * as networkRequests from './request/loint-cloudly.request.network';
import * as routingRequests from './request/loint-cloudly.request.routing';
import * as statusRequests from './request/loint-cloudly.request.status';
import * as versionRequests from './request/loint-cloudly.request.version';

export {
  certificateRequests as certificate,
  configRequests as config,
  identityRequests as identity,
  networkRequests as network,
  routingRequests as routing,
  statusRequests as status,
  versionRequests as version,
};
