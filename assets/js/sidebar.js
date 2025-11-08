document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.submenu-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      const parentLi = e.target.parentElement;
      parentLi.classList.toggle('has-open');
    });
  });
});
