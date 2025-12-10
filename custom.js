function hideSearchBarIfOnIndex() {
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index" ||
    window.location.pathname === "/index.html"
  ) {
    var searchBar = document.getElementById("search-bar-entry");
    if (searchBar) {
      searchBar.style.display = "none";
    }
    var assistant = document.getElementById("assistant-entry");
    if (assistant) {
      assistant.style.display = "none";
    }
    var header = document.getElementById("header");
    if (header) {
      header.style.display = "none";
    }
  }
}

// Run once on initial load
hideSearchBarIfOnIndex();

// Also run on navigation (SPA route changes)
const observer = new MutationObserver(() => {
  hideSearchBarIfOnIndex();
});
observer.observe(document.body, { childList: true, subtree: true });

// Add target="_blank" to external navbar links (like Blog)
document.querySelectorAll("li.navbar-link a").forEach(function (link) {
  try {
    const href = link.getAttribute("href");
    if (href && href.startsWith("http")) {
      link.setAttribute("target", "_blank");
    }
  } catch (e) {
    // Ignore errors
  }
});
