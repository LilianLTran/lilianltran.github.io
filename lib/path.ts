export const basePath = "/MyWebsite";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}