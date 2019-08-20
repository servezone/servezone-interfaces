import * as coreflowInterfaces from './servezone-interfaces.coreflow';

export interface IAppConfig {}

export interface ICloreflowConfig {}

export interface IServerConfig {
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
