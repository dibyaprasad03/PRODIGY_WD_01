window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    const scrollPos = window.scrollY;
  
    if (scrollPos > 200 & scrollPos<800) {
      header.style.backgroundColor = '';
      body.style.backgroundColor = '';
    } else if (scrollPos > 800) {
      header.style.backgroundColor = '';
      body.style.backgroundColor = 'white';
    } else {
      header.style.backgroundColor = '#8bc028';
      body.style.backgroundColor = '';
    }
});