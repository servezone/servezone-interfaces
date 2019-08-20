export interface IClusterStatus {
  status: 'ok' | 'changing' | 'warm up' | 'error';
}

export interface IClusterIdentifier {
  clustername: string;
}
