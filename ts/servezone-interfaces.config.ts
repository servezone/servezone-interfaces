/* ==========
This file exports all config interfaces for easier access under module.config.[anyconfig]
// ========== */ 

export * from './servezone-interfaces.config.cluster';
export * from './servezone-interfaces.config.server';
export * from './servezone-interfaces.config.service';
export type TConfigType =  'server' | 'cluster' | 'coreflow' | 'service';
