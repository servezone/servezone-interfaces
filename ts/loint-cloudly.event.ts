import * as plugins from './loint-cloudly.plugins';

export interface IEvent_Cloudly_ContainerVersionNotification
  extends plugins.typedrequestInterfaces.implementsTR<
    plugins.typedrequestInterfaces.ITypedEvent<plugins.tsclass.container.IContainer>,
    IEvent_Cloudly_ContainerVersionNotification
  > {
  name: 'newContainerVersion';
  uniqueEventId: string;
  payload: plugins.tsclass.container.IContainer;
}
