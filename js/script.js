// const navMenu = document.getElementsByClassName("nav-menu")

const buttons = document.querySelectorAll("button")
const navMenu = document.querySelectorAll(".nav-menu")
const navList = document.querySelectorAll(".menu-item")
const hamburger = document.querySelector(".hamburger i")
const sidebar = document.querySelector("aside")
const wrapper = document.querySelector(".wrapper")
const headerNav = document.querySelector("header nav")

// toggle sidebar
hamburger.addEventListener('click', (e) => {
    console.log("clicked")
    
    sidebar.classList.toggle('active')
    wrapper.classList.toggle('m-left')
    headerNav.classList.toggle('m-left')
    sidebar.classList.toggle("high")

    // change toggle icon to bars or close on click
    if(e.target.classList.contains('fa-times')) {
        e.target.classList.remove('fa-times')
        e.target.classList.add('fa-bars')
    } 
    else if(e.target.classList.contains('fa-bars')){
        e.target.classList.remove('fa-bars')
        e.target.classList.add('fa-times')
    }
})

// toggle side nav menu
buttons.forEach((button) => {
    let currentMenu = button
    currentMenu.addEventListener("click", (e) => {
         
        navList.forEach((list) => {
            button.classList.toggle("btn-clicked")
            
            if (list.previousElementSibling === e.target) {
                list.classList.toggle("active")
            }
        })
        button.classList.toggle("btn-down")
        button.classList.toggle("btn-clicked")
    })

    
})


