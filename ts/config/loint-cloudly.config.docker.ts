import * as plugins from '../loint-cloudly.plugins.js';

export interface IDockerRegistryInfo {
  serveraddress: string;
  username: string;
  password: string;
}

export interface IServiceRessources {
  memorySizeMB?: number;
  volumeMounts?: plugins.tsclass.container.IVolumeMount[];
}
