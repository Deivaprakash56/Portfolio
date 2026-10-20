import type { LinkState } from '../data/content'

export function isReady(link: LinkState): link is Extract<LinkState, { status: 'ready' }> {
  return link.status === 'ready'
}
