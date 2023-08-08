const element = document.querySelector(`.main-container-scroll`);
const button = document.querySelector(`.scrollToTop`);
console.log(element);
const observer = new IntersectionObserver(([obs])=>{

    if(!obs.isIntersecting){
        button.classList.remove(`hidden`);
    }else{
        button.classList.add(`hidden`);
    }
})

button.addEventListener(`click`, function(){
    window.scrollTo(0,0)
})


observer.observe(element);