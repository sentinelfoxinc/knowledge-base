document.addEventListener('DOMContentLoaded', function() {
  const toggles = document.querySelectorAll('.submenu-toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      this.parentElement.classList.toggle('open');
    });
  });
});
