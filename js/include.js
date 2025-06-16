// js/include.js
document.addEventListener("DOMContentLoaded", () => {
  const inject = async (selector, url) => {
    const response = await fetch(url);
    const html = await response.text();
    document.querySelector(selector).innerHTML = html;
  };

  inject("#include-header", "includes/header.html");
  inject("#include-footer", "includes/footer.html");
});
