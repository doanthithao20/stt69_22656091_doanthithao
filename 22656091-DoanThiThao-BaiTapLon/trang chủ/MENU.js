var menuItems = document.querySelectorAll('.menu li a');

menuItems.forEach(function(item) {
  item.addEventListener('click', function(e) {
    var submenu = this.nextElementSibling;
    if (submenu && submenu.classList.contains('submenu')) {
      e.preventDefault();
      submenu.classList.toggle('active');
    }
  });
});
//const close = document.querySelector(".close");
//const open = document.querySelector(".ham");
//const menu = document.querySelector(".menu");
//close.addEventListener("click", () => {
//  menu.style.visibility = "hidden";
//});
//open.addEventListener("click", () => {
//  menu.style.visibility = "visible";
//});