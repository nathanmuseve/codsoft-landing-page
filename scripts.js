const nav = document.getElementsByClassName("nav-links")[0];

let menu = document.getElementsByClassName("hamburger")[0];
menu.addEventListener('click', mnu);
function mnu(){
  if(nav.style.width == "0%") {
    nav.style.width = "50%"
  }else{
    nav.style.width = "0%"
  }
} 

// click anywhere to close menu 
window.onclick = function(event) {
  if(event.target === nav) {
    nav.style.display = "none";
}
}

// you can activate x menu and bars 
// let toggleHamburger =document.getElementsByClassName("hamburger")[0];

// function toggle(x) {
//   x.classList.toggle("change");
// }

document.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach((inputs) => {
  inputs.addEventListener('input', () => {
    if (inputs.value) {
      inputs.classList.add('typing');
    } else {
      inputs.classList.remove('typing');
    }
  });

  // Optionally, remove the typing class when the input loses focus
  inputs.addEventListener('blur', () => {
    inputs.classList.remove('typing');
  });
});
