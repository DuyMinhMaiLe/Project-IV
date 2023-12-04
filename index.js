const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".container-boarding");
const panes = $$(".container-character");

const tabActive = $(".container-boarding");
const trigger = $(".trigger");
requestIdleCallback(function () {
  trigger.style.left = tabActive.offsetLeft + "px";
  trigger.style.width = tabActive.offsetWidth + "px";
  trigger.style.height = tabActive.offsetHeight + "px";

});

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".container-boarding.active").classList.remove("active");
    $(".container-character.new").classList.remove("new");

    trigger.style.left = this.offsetLeft + "px";
    trigger.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("new");
  };
});


// Đóng mở menu

var header = document.getElementById('header');
var mobileMenu = document.getElementById('menuMobile');
var nav = document.getElementById('nav');
var overLay = document.getElementById('overlay');

  
  mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === 64;
    if (isClosed) {
      header.style.background = '#E4F4FF'
      header.style.height = 'auto'
      nav.style.display = 'flex'
      nav.style.flexDirection = 'column'
      mobileMenu.style.display = 'none'
      overLay.style.display = 'block'
    } else {
      nav.style.display = 'none'
      header.style.height = '64px'
    }
  } 
  
  // Tự động đóng mở khi chọn menu

  var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

  for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    var isMobile = window.innerWidth <= 431;

     
    var isCloseMenu = function() { 
      if(isMobile) {
        header.style.background = 'none'
        header.style.height = '64px'
        nav.style.display = 'none'
        mobileMenu.style.display = 'block'
        overLay.style.display = 'none'
      }
    }
    menuItem.onclick = isCloseMenu;
  }


  // Tự động đóng menu khi bấm vào khoảng không

  overLay.onclick = isCloseMenu;