export const STUDIO_FLAG_KEY = "growth-labs-studio";
export const STUDIO_TYPEFACE_KEY = "growth-labs-studio-typeface";
export const STUDIO_EDITS_KEY = "growth-labs-studio-edits";

export type StudioTypeface = "aesop" | "geist";

export const studioBootScript = `(function () {
  try {
    var flag = ${JSON.stringify(STUDIO_FLAG_KEY)};
    var typefaceKey = ${JSON.stringify(STUDIO_TYPEFACE_KEY)};
    var params = new URLSearchParams(location.search);
    if (params.get("studio") === "1") {
      localStorage.setItem(flag, "1");
      if (!localStorage.getItem(typefaceKey)) localStorage.setItem(typefaceKey, "aesop");
    }
    if (localStorage.getItem(flag) === "1") {
      document.documentElement.setAttribute("data-studio", "on");
      document.documentElement.setAttribute(
        "data-typeface",
        localStorage.getItem(typefaceKey) || "aesop",
      );
    }
  } catch (e) {}
})();`;
