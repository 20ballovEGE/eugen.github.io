//slider

const tabsBtn = document.querySelectorAll(".tab_button");
const tabsItems = document.querySelectorAll(".tab_item");
const buttonLine = document.querySelectorAll(".tab_button_line")


tabsBtn.forEach(function(item) {
  item.addEventListener("click", function() {

    let currentBtn = item;
    
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    let currentLine = currentBtn.getAttribute("data-line");
    let line = document.querySelector(currentLine)


    tabsBtn.forEach(function(item) {
      item.classList.remove("active");
    });

    tabsItems.forEach(function(item) {
      item.classList.remove("active");
    });

    buttonLine.forEach(function(item){
        item.classList.remove("active");
    })

    line.classList.add("active")
    currentBtn.classList.add("active");
    currentTab.classList.add("active");
  });
});

//slider

const tabsBox = document.querySelector(".slider_line")
allTabs = tabsBox.querySelectorAll(".slider_card")
let isDragging = false;

const dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
}
const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}
tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

//accordion

const acc = document.getElementsByClassName("accordion");

let i;
                
for (i = 0; i < acc.length; i++) {
  
  acc[i].addEventListener("click", function() {
  
  this.classList.toggle("ac_active");
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
  panel.style.maxHeight = null;
} else {
  panel.style.maxHeight = panel.scrollHeight + "px";
}
});
}

//modal

const modal = document.querySelector('.modal'); 
const modalOpenButton = document.querySelector('.banner2_button'); 
const modalCloseButton = document.querySelector('.modal_close'); 


modalOpenButton.addEventListener("click", () => {
  modal.classList.add('open');
});

modalCloseButton.addEventListener("click", () => {
  modal.classList.remove('open');
});

//filter

const filter = document.querySelectorAll('.sort_filter'); 
const sort_card = document.querySelectorAll('.sort_card');

filter.forEach(link => {
  link.addEventListener('click', (event) => {
    
    event.preventDefault(); 

    const filterValue = link.dataset.filter; 

    sort_card.forEach(col => {
      col.classList.remove('hide');

      if (filterValue !== 'all' && filterValue !== col.dataset.cat) { 
        col.classList.add('hide'); 
      }
    });
  });
});

//burger

const burger_menu = document.querySelector(".burger_menu")
const open_burger = document.querySelector(".burger_open")
const close_burger = document.querySelector(".burger_close")

open_burger.addEventListener('click', () =>{
  burger_menu.classList.add('💀')
})

close_burger.addEventListener('click', () =>{
  burger_menu.classList.remove('💀')
})