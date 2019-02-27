export const LOAD_VIDEO = 'LOAD_VIDEO'

export function loadVideo(path) {
  return { type: LOAD_VIDEO, path }
}