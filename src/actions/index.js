export const LOAD_VIDEO = 'LOAD_VIDEO'

export function loadVideo(file) {
  return { type: LOAD_VIDEO, file }
}