export interface IClusterConfig {
  name: string;
  zone: 'servezone' | 'gitzone' | 'shipzone' | 'umbrellazone' | 'trafficzone' | 'proxyzone';
  manager_domain: string;
  manager_ip: string;
  containers: IClusterContainerConfig[];
}

export interface IClusterContainerConfig {
  image: string;
  ports: {
    web: number
  };
  domains: string[];
}