let silderMenu = document.querySelector("#silderMenu");
let mainContent = document.querySelector("#mainContent");
let body = document.querySelector("body");
let navBar = document.querySelector("nav");
let navLinks = document.querySelector("nav ul");
function openMenu (){
    silderMenu.style.transform = "translateX(-16rem)";
    mainContent.classList.add("blur");
    
}
function closMenu (){
    silderMenu.style.transform = "translateX(16rem)";
    mainContent.classList.remove("blur");
    
}
window.addEventListener("scroll", ()=>{
    if(scrollY > 50){
        navBar.classList.add("bg-wite", "opacity-100" , "backdrop-blur-lg" , "shadow-sm");
        navLinks.classList.remove("bg-white", "shadow-sm", "bg-opacity-50");
    }else{
        navBar.classList.remove("bg-wite", "opacity-100" , "backdrop-blur-lg" , "shadow-sm");
        navLinks.classList.add("bg-white", "shadow-sm", "bg-opacity-50");
    }
});
/* ======== Dark Mode ======== */
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}
/* ======== reset from ======== */
