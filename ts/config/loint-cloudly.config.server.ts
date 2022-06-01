import { IDockerRegistryInfo } from './loint-cloudly.config.docker.js';

export interface IServerConfig {
  type: 'server';

  /**
   * a list of debian packages to be installed
   */
  requiredDebianPackages: string[];

  /**
   * a list of SSH keys to deploy
   */
  sshKeys: IServezoneSshKey[];

  dockerRegistryInfo: IDockerRegistryInfo;
}

export interface IServezoneSshKey {
  keyName: string;
  public: string;
  private?: string;
}
