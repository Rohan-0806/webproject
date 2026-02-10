const isSubPage =
  location.pathname.includes("/products/") ||
  location.pathname.includes("/accessories/");

const basePath = isSubPage ? "../" : "";

fetch(basePath + "header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });