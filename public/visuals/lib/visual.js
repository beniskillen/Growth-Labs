/* Growth Labs visual library: runtime.
   Load synchronously in <head>, before the stylesheets, so the theme is set
   before first paint.

   URL parameters:
     ?theme=dark|light   colour scheme (default dark, the site canvas)
     ?bare=1             hide eyebrow, brand mark and footer (embedding inside a page that has its own context)
     ?export=1           disable motion; used by the PNG export script
*/
(function () {
  var html = document.documentElement;
  var params = new URLSearchParams(location.search);
  var theme = params.get("theme") === "light" ? "light" : "dark";
  html.setAttribute("data-theme", theme);
  if (params.get("bare") === "1") html.setAttribute("data-bare", "1");
  if (params.get("export") === "1") html.setAttribute("data-export", "1");
  var embedded = false;
  try { embedded = window.top !== window.self; } catch (e) { embedded = true; }
  if (!embedded && params.get("export") !== "1") html.setAttribute("data-standalone", "1");

  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  ready(function () {
    var slug = html.getAttribute("data-slug") || location.pathname.split("/").pop().replace(/\.html$/, "");
    var ratio = html.getAttribute("data-ratio") || "16/10";
    var title = document.title.replace(/\s*[|·—-]\s*Growth Labs.*$/, "");
    var base = location.origin === "null" || location.protocol === "file:"
      ? location.href.split("?")[0]
      : location.origin + location.pathname;

    function embedCode(t) {
      return '<iframe src="' + base + "?theme=" + t + '" title="' + title.replace(/"/g, "&quot;") +
        '" loading="lazy" style="width:100%;aspect-ratio:' + ratio + ';border:0;display:block;background:transparent"></iframe>';
    }

    /* Standalone toolbar */
    if (html.hasAttribute("data-standalone")) {
      var tools = document.createElement("div");
      tools.className = "tools";
      tools.innerHTML =
        '<div class="group">' +
          '<a href="../index.html">&larr; Library</a>' +
          '<button type="button" data-set-theme="dark" aria-pressed="' + (theme === "dark") + '">Dark</button>' +
          '<button type="button" data-set-theme="light" aria-pressed="' + (theme === "light") + '">Light</button>' +
        "</div>" +
        '<div class="group">' +
          '<a href="../png/' + slug + "--dark.png" + '" download>PNG dark</a>' +
          '<a href="../png/' + slug + "--light.png" + '" download>PNG light</a>' +
          '<button type="button" data-embed>Copy embed code</button>' +
          '<span class="status" aria-live="polite"></span>' +
        "</div>";
      var page = document.querySelector(".page") || document.body;
      page.insertAdjacentElement("afterend", tools);

      tools.addEventListener("click", function (e) {
        var t = e.target.closest("[data-set-theme]");
        if (t) {
          params.set("theme", t.getAttribute("data-set-theme"));
          location.search = params.toString();
          return;
        }
        if (e.target.closest("[data-embed]")) {
          var code = embedCode(theme);
          var status = tools.querySelector(".status");
          var done = function () { status.textContent = "Copied"; setTimeout(function () { status.textContent = ""; }, 1800); };
          var fallback = function () {
            var area = tools.querySelector("textarea");
            if (!area) { area = document.createElement("textarea"); area.readOnly = true; tools.appendChild(area); }
            area.value = code; area.focus(); area.select();
          };
          if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code).then(done, fallback);
          else fallback();
        }
      });
    }

    /* Iframe height messaging, for hosts that want to auto-size. */
    if (embedded) {
      var post = function () {
        try {
          window.parent.postMessage({ type: "gl-visual", slug: slug, height: document.documentElement.scrollHeight }, "*");
        } catch (e) { /* noop */ }
      };
      if ("ResizeObserver" in window) new ResizeObserver(post).observe(document.body);
      post();
    }
  });
})();
