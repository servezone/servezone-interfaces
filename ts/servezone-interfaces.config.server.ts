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
  checkInAgain: number;

  sshKeys: IServezoneSshKey[];
}

export interface IServezoneSshKey {
  keyName: string;
  public: string;
  private?: string;
}