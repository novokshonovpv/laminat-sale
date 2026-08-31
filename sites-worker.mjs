function assetRequest(request, pathname) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url, request);
}

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const direct = await env.ASSETS.fetch(request);

    if (direct.status !== 404 || url.pathname.includes(".")) {
      return direct;
    }

    const cleanPath = url.pathname.replace(/\/$/, "") || "/index";
    const html = await env.ASSETS.fetch(assetRequest(request, `${cleanPath}.html`));
    if (html.status !== 404) return html;

    return env.ASSETS.fetch(assetRequest(request, `${cleanPath}/index.html`));
  },
};

export default worker;
