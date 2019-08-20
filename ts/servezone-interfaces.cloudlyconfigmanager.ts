import * as coreflowInterfaces from './servezone-interfaces.coreflow';

export type TConfigType = 'server' | 'coreflow' | 'app';

export interface IAppConfig {
  type: 'app';
}

export interface ICloreflowConfig {
  type: 'coreflow';
}

export interface IServerConfig {
  type: 'server';

  /**
   * a list of debian packages to be installed
   */
  requiredPackages: string[];

  /**
   * needs reboot
   */
  reboot: boolean;

  /**
   * the time to check in again
   */
  checkInAgain: 600000;

  sshKeys: IServezoneSshKey[];
}

export interface IServezoneSshKey {
  keyName: string;
  public: string;
  private?: string;
}
