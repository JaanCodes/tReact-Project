const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav__menu')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})




const faqs = document.querySelectorAll(".faq")
 
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})