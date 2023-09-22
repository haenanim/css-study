window.addEventListener('scroll', function () {
  let fav_text = document.querySelectorAll('.fav-text');
  let value = scrollY;
  if (value > 400) {
    fav_text.forEach((item) => {
      item.style.animation = 'slide-backward 2s ease-in-out';
    });
  } else {
    fav_text.forEach((item) => {
      item.style.animation = 'slide-forward 2s ease-in-out';
    });
  }
});
