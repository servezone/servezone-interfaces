import * as plugins from '../loint-cloudly.plugins.js';

export interface IRequest_Any_Cloudly_GetSslCertificate
  extends plugins.typedrequestInterfaces.implementsTR<
    plugins.typedrequestInterfaces.ITypedRequest,
    IRequest_Any_Cloudly_GetSslCertificate
  > {
  method: 'getSslCertificate';
  request: {
    authToken: string;
    requiredCertName: string;
  };
  response: {
    certificate: plugins.tsclass.network.ICert;
  };
}
