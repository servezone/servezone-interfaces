/* ==========
This file exports all config interfaces for easier access under module.config.[anyconfig]
// ========== */

export * from './config/loint-cloudly.config.cluster';
export * from './config/loint-cloudly.config.server';
export type TConfigType = 'server' | 'cluster' | 'coreflow' | 'service';
