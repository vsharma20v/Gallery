const images = document.querySelectorAll("img[data-src]");

if ("loading" in HTMLImageElement.prototype) {
  for (let i = 0; i < images.length; i++) {
    images[i].src = images[i].dataset.src;
  }
  console.log("Yes");
} else {
  console.log("no");
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js";
  script.defer = "true";
  document.head.appendChild(script);
}
