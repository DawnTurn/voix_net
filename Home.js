const secondPage = document.querySelector('.second-page')
const image = document.querySelector('.image-miss')
const content = document.querySelector('.content-item')


scrollAppear = () => {
   const introText = document.querySelector(".fourth-page");
   const introPosition = introText.getBoundingClientRect().top;
   const screenPosition = window.innerHeight / 2.2;

   if (introPosition < screenPosition) {
     introText.classList.add("appear");
   }

   else{
     introText.classList.remove('appear')
   }

   const imageAppear = document.querySelector('.internet')
   const imagePosition = imageAppear.getBoundingClientRect().top
   const currentPosition = window.innerHeight / 1.2

   if(imagePosition < currentPosition){
    imageAppear.classList.add('appear-img')
   }

   else{
    imageAppear.classList.remove('appear-img')
   }
};

window.addEventListener("scroll", scrollAppear);

gsap.from(
  ScrollTrigger.create({
    trigger: ".second-page",
    start: "top center",
    end: "bottom center",
    markers: false,
    onEnter: () => {
      gsap.set(image, { opacity: 1, y: 0 });
      gsap.set(content, { opacity: 1, x: 0, delay: 0.5 });
    },
    onEnterBack: () => {
      gsap.set(image, { opacity: 1, y: 0 });
      gsap.set(content, { opacity: 1, x: 0, delay: 0.5 });
    },
    onLeaveBack: () => {
      gsap.set(image, { opacity: 0, y: 30 });
      gsap.set(content, { opacity: 0, x: 30 });
    },
  }),
);


