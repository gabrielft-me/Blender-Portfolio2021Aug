const hamburgerMenu = document.querySelector('.hamburger-menu');

const objetos = document.querySelectorAll(".render-grid img");

const sections = [
  { id: '#Second_Page', className: 'On_Second', offset: -60 },
  { id: '#Third_Page', className: 'On-Third', offset: 100 },
  { id: '#Fourth_Page', className: 'On-Fourth', offset: 100 },
  { id: '#Fifth_Page', className: 'On-Fifth', offset: 100 },
];

document.addEventListener('scroll', function() {
  const scrollPos = window.scrollY;
  const docHeight = document.body.offsetHeight;
  const windowHeight = window.innerHeight;

  for (const section of sections) {
    const el = document.querySelector(section.id);
    if (scrollPos >= el.offsetTop + section.offset) {

      hamburgerMenu.classList.add(section.className);
    } else {
      hamburgerMenu.classList.remove(section.className);
    }
  }
});



hamburgerMenu.addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("open-menu");
  document.querySelector(".sidebar").classList.toggle("open-menu");
});


document.addEventListener("click", (event) => {

  if (!event.target.closest(".fullScreen")) {
      objetos.forEach(objeto => {
          objeto.classList.remove("fullScreen");
      });
  }
});

  objetos.forEach(objeto => {
      objeto.addEventListener("click", () => {
          if (objeto.classList.contains("fullScreen")) {
              objeto.classList.remove("fullScreen");
          } else {
              objetos.forEach(o => o.classList.remove("fullScreen"));
              objeto.classList.add("fullScreen");
          }
      });
  });


