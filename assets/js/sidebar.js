document.addEventListener('DOMContentLoaded', function() {
  // Get current page path
  const currentPath = window.location.pathname;
  
  // Remove trailing slash if present
  const cleanPath = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
  
  // Find and activate the current page link
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    const cleanLinkPath = linkPath.endsWith('/') ? linkPath.slice(0, -1) : linkPath;
    
    if (cleanPath === cleanLinkPath || 
        (cleanPath === '' && cleanLinkPath === '/') ||
        (cleanPath.endsWith(cleanLinkPath) && cleanLinkPath !== '/')) {
      link.classList.add('active');
      
      // Expand parent sections
      let parentSection = link.closest('.sidebar-section');
      while (parentSection) {
        parentSection.classList.add('active');
        parentSection = parentSection.parentElement.closest('.sidebar-section');
      }
    }
  });
});