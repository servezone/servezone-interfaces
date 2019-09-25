import { IDockerRegistryInfo } from "./servezone-interfaces.config.docker";

export interface IClusterConfig {
  name: string;
  zone: 'servezone' | 'gitzone' | 'shipzone' | 'umbrellazone' | 'trafficzone' | 'proxyzone';
  type: 'cluster';
  secretKey: string;
  jumpCode: string;
  jumpCodeUsedAt: number;
  manager_domain: string;
  manager_ip: string;
  containers: IClusterConfigContainer[];
  acmeInfo: {
    serverAddress: string;
    serverSecret: string;
  };
  registryInfo: IDockerRegistryInfo;
}

export interface IClusterConfigContainer {
  name: string;
  image: string;
  ports: {
    web: number
  };
  domains: string[];
  secrets: {[key: string]: string};
}
