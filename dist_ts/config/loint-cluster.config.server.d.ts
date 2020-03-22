import { IDockerRegistryInfo } from './loint-cluster.config.docker';
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
