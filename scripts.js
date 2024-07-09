let nav = document.getElementsByClassName("nav-links");
let menu = document.getElementsByClassName("hamburger").addEventListener('click', "mnu()");
function mnu(){
  if(nav.style.width = 0) {
    return nav.style.width = "50%"
  } else {
    return nav.style.width = "0%"
  }
}

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
