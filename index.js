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