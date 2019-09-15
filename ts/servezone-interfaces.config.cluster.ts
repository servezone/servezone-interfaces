export interface IClusterConfig {
  name: string;
  zone: 'servezone' | 'gitzone' | 'shipzone' | 'umbrellazone' | 'trafficzone' | 'proxyzone';
  type: 'cluster';
  manager_domain: string;
  manager_ip: string;
  containers: IClusterConfigContainer[];
}

export interface IClusterConfigContainer {
  image: string;
  ports: {
    web: number
  };
  domains: string[];
}