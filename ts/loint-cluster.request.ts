import * as plugins from './loint-cluster.plugins';

import * as certificateRequests from './loint-cluster.request.certificate';
import * as configRequests from './loint-cluster.request.config';
import * as identityRequests from './loint-cluster.request.identity';
import * as networkRequests from './loint-cluster.request.network';
import * as routingRequests from './loint-cluster.request.routing';
import * as statusRequests from './loint-cluster.request.status';
import * as versionRequests from './loint-cluster.request.version';

export {
  certificateRequests as certificate,
  configRequests as config,
  identityRequests as identity,
  networkRequests as network,
  routingRequests as routing,
  statusRequests as status,
  versionRequests as version
};
