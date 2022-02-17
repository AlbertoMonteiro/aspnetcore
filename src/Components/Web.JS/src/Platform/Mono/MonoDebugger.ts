const currentBrowserIsChrome = (window as any).chrome
  && navigator.userAgent.indexOf('Edge') < 0; // Edge pretends to be Chrome

let hasReferencedPdbs = false;
let debugBuild = false;

export function hasDebuggingEnabled() {
  return (hasReferencedPdbs || debugBuild) && currentBrowserIsChrome;
}

