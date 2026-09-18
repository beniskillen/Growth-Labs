const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

function splitHref(path: string) {
  const suffixAt = path.search(/[?#]/);
  if (suffixAt < 0) return { pathname: path, suffix: "" };
  return { pathname: path.slice(0, suffixAt), suffix: path.slice(suffixAt) };
}

export function withBasePath(path: string) {
  if (!path.startsWith("/")) return path;

  const { pathname, suffix } = splitHref(path);
  let next = pathname;
  if (basePath && next !== basePath && !next.startsWith(`${basePath}/`)) {
    next = `${basePath}${next}`;
  }

  if (basePath) {
    if (next === basePath || next === "/") next = `${basePath}/`;
    else if (!next.endsWith("/")) next = `${next}/`;
  }

  return `${next}${suffix}`;
}

export const studioHomeHref = withBasePath("/?studio=1");
