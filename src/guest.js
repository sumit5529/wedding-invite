import { wedding } from './data';

// Personalised invite links: ?to=<guest name>
const MAX_LEN = 60;

// Reads the guest name from the page address. Returns '' when there is none.
export function getGuestName() {
  try {
    const raw = new URLSearchParams(window.location.search).get('to') || '';
    return raw.replace(/\s+/g, ' ').trim().slice(0, MAX_LEN);
  } catch {
    return '';
  }
}

// Builds a personal link for one guest, e.g. https://site.vercel.app/?to=शर्मा+परिवार
export function makeInviteLink(name, base = window.location.origin) {
  const url = new URL('/', base);
  url.searchParams.set('to', name.replace(/\s+/g, ' ').trim().slice(0, MAX_LEN));
  return url.toString();
}

// On the short address (https://site.vercel.app/invite) returns the link-maker address to redirect to, else null.
export function getLinkMakerRedirect() {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path === wedding.makerPath ? `/?make=${encodeURIComponent(wedding.makerKey)}` : null;
}

// True on the link-maker page: https://site.vercel.app/?make=<makerKey>
export function isLinkMakerPage() {
  return new URLSearchParams(window.location.search).get('make') === wedding.makerKey;
}
