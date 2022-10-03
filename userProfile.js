const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

console.log('ScreenWidth :' + ' ' + screenWidth);
console.log('ScreenHeight :' + ' ' + screenHeight);

const loader = document.querySelector('.preloader');
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 2000);
  }

  
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log('the latitude is ', position.coords.latitude);
    console.log('the longitude is ', position.coords.longitude);
});

document.querySelector('#back').onclick = function Click() {
    window.history.back()
}
