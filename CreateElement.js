function CreateElement(src, height, width, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.height = height;
    img.width = width;
    img.alt = alt;
    document.body.appendChild(img);
}