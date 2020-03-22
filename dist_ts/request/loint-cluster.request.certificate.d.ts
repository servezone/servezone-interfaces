import * as plugins from '../loint-cluster.plugins';
export interface IRequest_Any_Cloudly_GetSslCertificate extends plugins.typedrequestInterfaces.implementsTR<plugins.typedrequestInterfaces.ITypedRequest, IRequest_Any_Cloudly_GetSslCertificate> {
    method: 'getSslCertificate';
    request: {
        requiredCertName: string;
        targetServiceName: string;
    };
    response: {
        certificate: plugins.tsclass.network.ICert;
    };
}
