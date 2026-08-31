export function assetPath(path: string) {
  const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? "";
  return prefix && path.startsWith("/") ? `${prefix}${path}` : path;
}
