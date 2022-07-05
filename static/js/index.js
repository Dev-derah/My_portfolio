const projects = document.querySelectorAll(".project-container");
const all_overlay = document.querySelectorAll(".overlay");
const hamburger = document.querySelector(".hamburger");
const nav_items = document.querySelector(".nav-items");
const my_pic = document.querySelector(".my-pic");
const nav_item = document.querySelectorAll(".nav-item");
const toggle_light_mode = document.querySelector(".toggle-container");
const toggle_btn = document.querySelector(".toggle-ball")



projects.forEach(project => {
    project.addEventListener("click", () => {
        all_overlay.forEach(overlay => {
            overlay.style.opcacity = "1";
        })
        
        
    })
});


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav_items.classList.toggle("active");
    my_pic.classList.toggle("inactive");
});


nav_item.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav_items.classList.remove("active");
        my_pic.classList.remove("inactive");
    })
})


toggle_light_mode.addEventListener("click", () => {
    toggle_light_mode.classList.toggle("light-mode");
    toggle_btn.classList.toggle("active");
    
})