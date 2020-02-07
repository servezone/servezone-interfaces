import * as plugins from './servezone-interfaces.plugins';

import * as configRequests from './servezone-interfaces.request.config';
import * as identityRequests from './servezone-interfaces.request.identity';
import * as networkRequests from './servezone-interfaces.request.network';
import * as routingRequests from './servezone-interfaces.request.routing';
import * as statusRequests from './servezone-interfaces.request.status';
import * as versionRequests from './servezone-interfaces.request.version';

export {
  configRequests as config,
  identityRequests as identity,
  networkRequests as network,
  routingRequests as routing,
  statusRequests as status,
  versionRequests as version
};
