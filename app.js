window.onscroll = function() {
    myFunction();
}
  var header = document.querySelector(".navbar");
  var navbarOffset = header.offsetTop;
  function myFunction() {
    if (window.pageYOffset > navbarOffset) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const projectBtn = document.getElementById('project');
    function scrollToProjectSection() {
        const projectSection = document.querySelector('.project-section');
        projectSection.scrollIntoView({ behavior: 'smooth' });
    }
    projectBtn.addEventListener('click', scrollToProjectSection);
});

document.addEventListener('DOMContentLoaded',()=>{
  let about=document.getElementsByClassName('nav-item2');

function scrolltoabout(){
  let aboutsection=document.querySelector('.fotter');
  aboutsection.scrollIntoView({behavior:'smooth'});
}
    Array.from(about).forEach(about => {
      about.addEventListener('click', scrolltoabout);
  });
});


document.addEventListener('DOMContentLoaded', ()=>{
  let home=document.getElementsByClassName('nav-item1');
  function scrolltotop(){
    let homesection=document.querySelector('.middle')
    homesection.scrollIntoView({behavior:'smooth'});
  }
  Array.from(home).forEach(home => {
    home.addEventListener('click', scrolltotop);
});
});

document.addEventListener('DOMContentLoaded', ()=>{
  let project=document.getElementsByClassName('nav-item3');
  function scrolltoproject(){
    let project=document.querySelector('.project-section')
    project.scrollIntoView({behavior:'smooth'});
  }
  Array.from(project).forEach(project => {
    project.addEventListener('click', scrolltoproject);
});
});

document.addEventListener('DOMContentLoaded', ()=>{
  let contact=document.getElementsByClassName('nav-item4');
  function scrolltocontact(){
    let contact=document.querySelector('.contact-section')
    contact.scrollIntoView({behavior:'smooth'});
  }
  Array.from(contact).forEach(contact => {
    contact.addEventListener('click', scrolltocontact);
});
});


document.addEventListener('DOMContentLoaded', () => {
  let caseBtn = document.getElementById('spotifybtn');
  function projectRedirect() {
      window.location.replace = 'https://shivam-khode01.github.io/potfolio-spotify/';
  }
  if (caseBtn) {
      caseBtn.addEventListener('click', projectRedirect);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  let caseBtn = document.getElementById('hireachef-btn');
  function projectRedirect() {
      window.location.href = '/case-study-hireachef.html';
  }
  if (caseBtn) {
      caseBtn.addEventListener('click', projectRedirect);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  let caseBtn = document.getElementById('simongame-btn');
  function projectRedirect() {
      window.location.href = '/case-study-simongame..html';
  }
  if (caseBtn) {
      caseBtn.addEventListener('click', projectRedirect);
  }
});


  // Function to toggle the sidebar visibility
  function showsidebar() {
    const sidebar = document.querySelector('#sidebar');
    if (sidebar.style.display === 'flex') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'flex';
    }
}

// Function to hide the sidebar
function hidesidebar() {
    const sidebar = document.querySelector('#sidebar');
    sidebar.style.display = 'none';
}
document.querySelector('#close-sidebar-btn').addEventListener('click', hidesidebar);


// Function to scroll to the target section and hide the sidebar
function navigateTo(target) {
  // Scroll to the target section smoothly
  document.querySelector(`.${target}`).scrollIntoView({ behavior: 'smooth' });
  
  // Hide the sidebar
  document.querySelector('#sidebar').style.display = 'none';
}

// Attach event listeners to the sidebar items
document.addEventListener('DOMContentLoaded', () => {
  const sidebarItems = document.querySelectorAll('.nav-item-bar1, .nav-item-bar2, .nav-item-bar3, .nav-item-bar4');
  
  sidebarItems.forEach(item => {
      item.addEventListener('click', () => {
          // Get the target section from the data-target attribute
          const target = item.getAttribute('data-target');
          navigateTo(target);
      });
  });
});
