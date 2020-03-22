export interface IVersionData {
    /**
     * the docker image url
     * example: registry.gitlab.com/hosttoday/ht-docker-node:latest
     */
    dockerImageUrl: string;
    /**
     * the docker image version. Note: This is different from docker tags that are often used for versions.
     */
    dockerImageVersion: string;
}
