const nav = document.querySelectorAll(".nav__item")

nav.forEach((item)=>{
    item.addEventListener('click',()=>{
        nav.forEach((item)=>{
            item.classList.remove("nav__item_active")
        })
        item.classList.add("nav__item_active")
    })
})