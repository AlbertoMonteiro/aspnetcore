import { JSInitializer } from "./JSInitializers";

export async function fetchAndInvokeInitializers() : Promise<JSInitializer> {
  const jsInitializersResponse = await fetch('/static/blazor.modules.json', {
    method: 'GET',
    credentials: 'include',
    cache: 'no-cache'
  });

  const initializers: string[] = await jsInitializersResponse.json();
  const jsInitializer = new JSInitializer();
  await jsInitializer.importInitializersAsync(initializers, []);
  return jsInitializer;
}
