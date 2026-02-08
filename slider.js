let current = 1;

function changeImage(num) {
    current = num;
    document.getElementById("bannerImg").src =
        "images/banner" + num + ".jpg";
}

function autoChange() {
    current++;
    if (current > 3) {
        current = 1;
    }
    changeImage(current);
}

setInterval(autoChange, 30000); // 30 seconds
