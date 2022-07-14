
// items
const menu = [
   {
      id: 1,
      title: "",
      category: "breakfast",
      img: "./images/image.jpg",
      desc: `I'm baby wake hammock freegan coppe img whatever`
   },
   {
      id: 2,
      title: "",
      category: "breakfast",
      img: "./images/image.jpg",
      desc: `I'm baby wake hammock freegan co`
   },
   {
      id: 3,
      title: "",
      category: "breakfast",
      img: "./images/image.jpg",
      desc: `I'm baby wake hammock freegan co`
   },
   {
      id: 4,
      title: "",
      category: "breakfast",
      img: "./images/image.jpg",
      desc: `I'm baby wake hammock freegan co`
   }
];

const menuitem = [
   {
      id: 1,
      title: "",
      category: "breakfast",
      img: "./images/image.jpg",
      desc: `I'm baby wake hammock freegan coppe img whatever`
   },
   {
      id: 2,
      title: "",
      category: "breakfast",
      img: "./images/image.jpg",
      desc: `I'm baby wake hammock freegan co`
   },
   {
      id: 3,
      title: "",
      category: "breakfast",
      img: "./images/image.jpg",
      desc: `I'm baby wake hammock freegan co`
   },
   {
      id: 4,
      title: "",
      category: "breakfast",
      img: "./images/image.jpg",
      desc: `I'm baby wake hammock freegan co`
   }
];

const sectionCenter = document.querySelector(".section-header");



// load menu items
window.addEventListener('DOMContentLoaded', function () {
   displayMenuItems(menu);
})

// filter menu items
filterBtns.forEach(function (btn) {
   btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
   });
});


function displayMenuItems(menuItems) {
   let displayMenu = menu.map(function (item) {
      return '<article class="menu-item"><img src = ${ item.img } class="photo" alt = ${ item.title } />
         <h1> ${ item.title }</h1>
      <h4 class="price">$${item.price}</h4>
      // buck stops here
      <p class="item-text">${item.desc}</p>
      </article > ';
   });
   displayMenu = displayMenu.join("");
   // console.log(displayMenu);
   sectionCenter.innerHTML = displayMenu;
}
