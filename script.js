let navbar = document.getElementById("navigation");
let shouldStickPosition = navbar.offsetTop;
function addOrRemoveStickyClass(){
    if(window.scrollY >= shouldStickPosition){
        navbar.classList.add("sticky");
       navbar.classList.add("fade-in-nav")
      
    } else{
        navbar.classList.remove("sticky");
        navbar.classList.remove("fade-in-nav")
       
    }
}
window.onscroll = () => {
    addOrRemoveStickyClass();
}
window.onresize = () => {
    shouldStickPosition = navbar.offsetTop;
}



/**
 * navbar1 toggle
 */


/**
 * header
 */




const elements = document.querySelectorAll('.fadeinleft');
const elements1 = document.querySelectorAll('.fade-in');
const elements2 = document.querySelectorAll('.fadeinright');
const elements3 = document.querySelectorAll('.fadeindown');
const elements4 = document.querySelectorAll('.fadeinup');
const options = {
    root:null,
    rootMargin: '0px',
    threshold: .4
}
const callbacks = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active-left');
        }
    });
}
const callbacks1 = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
}
const callbacks2 = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active-right');
        }
    });
}
const callbacks3 = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active-down');
        }
    });
}
const callbacks4 = (entries) => {
  entries.forEach(entry => {
      if(entry.isIntersecting){
          entry.target.classList.add('active-up');
      }
  });
}
let observer = new IntersectionObserver(callbacks, options);
let observer1 = new IntersectionObserver(callbacks1, options);
let observer2 = new IntersectionObserver(callbacks2, options);
let observer3 = new IntersectionObserver(callbacks3, options);
let observer4 = new IntersectionObserver(callbacks4, options);
elements.forEach(elements =>{
    observer.observe(elements);
})
elements1.forEach(elements1 =>{
    observer1.observe(elements1);
})
elements2.forEach(elements2 =>{
    observer2.observe(elements2);
})
elements3.forEach(elements3 =>{
    observer3.observe(elements3);
})
elements4.forEach(elements4 =>{
  observer4.observe(elements4);
});


