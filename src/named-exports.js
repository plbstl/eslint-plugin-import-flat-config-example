export const a = 1
const b = 2
export { b }

const c = 3
export { c as d }

export class ExportedClass { }
export * as deep from './deep'
