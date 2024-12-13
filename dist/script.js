window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const navBar = document.getElementById('navID');
    const banner = document.getElementById('logo-banner');
   
    const logo = document.querySelector('.w-14');
    const heading = document.querySelector('.text-4xl');
    
    // Check the scroll position
    if (scrolled >= 403) {
        navBar.classList.add('fixed', 'top-0', 'z-10');
        banner.classList.add('hidden')
        
        if (logo) logo.classList.remove('hidden');
        if (heading) heading.classList.remove('hidden');
    } else {
        navBar.classList.remove('fixed', 'top-0', 'z-10');
        banner.classList.remove('hidden')
        
        if (logo) logo.classList.add('hidden');
        if (heading) heading.classList.add('hidden');
    }
});
