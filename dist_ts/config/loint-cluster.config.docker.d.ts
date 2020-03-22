export interface IDockerRegistryInfo {
    serveraddress: string;
    username: string;
    password: string;
}
export interface IServiceRessources {
    memorySizeMB?: number;
    volumeMounts: IVolumeMount[];
}
export interface IVolumeMount {
    hostFsPath: string;
    containerFsPath: string;
}
