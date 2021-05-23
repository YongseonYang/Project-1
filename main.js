const toogleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    icons.classList.toggle('active')
});

$(".hello").click(function() {
    var element = $(".conf");
    blink(element);
    setTimeout(function() {
      reset(element);
    }, 2000);
  });
  function blink(element, callback) {
    element.css('visibility', 'visible');
    element.css('opacity', '0');
  }
  function reset(element) {
    element.css('visibility', 'hidden');
    element.css('opacity', '1');
  }