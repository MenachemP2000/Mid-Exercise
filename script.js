let images = ['250X110668568400.jpg', 'banner_atar.jpg', 'paz_250x110103131473.jpg'];

let index = 0;
var imgElement = document.getElementById('mainPhoto');

function change() {
   document.getElementById('mainPhoto').src = images[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 5000);
};