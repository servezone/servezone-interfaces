export interface IAppConfig {};

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
}
