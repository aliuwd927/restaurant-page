import { create, remove } from "lodash";


function navMenuDOM(){
   const content = document.querySelector('.content');
   
   const navMenuContainer = document.createElement('div');
   const navMenuUL = document.createElement('ul');
   
   navMenuContainer.classList.add('navMenuCont');
   navMenuUL.classList.add('navUL');
   
   navMenuContainer.appendChild(navMenuUL);
   content.appendChild(navMenuContainer);
   
   const arrayLi = [];

   const createLi = (()=>{
      const getUL = document.querySelector('.navUL');

      for(let i=0; i < 3; i++){
         const navLi = document.createElement('li');
         navLi.classList.add('navLi');
         arrayLi.push(navLi);
         getUL.appendChild(navLi);
      }

      return {
         getUL,
      };
   })();

   const liInnerHtml = (()=>{

      arrayLi.forEach((element,index) =>{
         //console.log(element,index);
         if(index === 0){
            arrayLi[0].innerHTML = `<a href="#" class="tabs__link">Home</a>`;
         }else if(index === 1){
            arrayLi[1].innerHTML = `<a href="#" class="tabs__link">Menu</a>`;
         }else if(index === 2){
            arrayLi[2].innerHTML = `<a href="#" class="tabs__link">Contact</a>`;
         }
      });


   })();


   const createLiMobile = () => {
      //console.log('triggered');

     console.log(arrayLi);
     
   }


   const responsiveDOMUL = () =>{
      //console.log('triggerd');
      const getUL = document.querySelector('.navUL');

      const btnMenu = document.createElement('div');
      btnMenu.classList.add('mobileMenu');
      btnMenu.innerHTML = `<i style = 'font-size: 48px'class="fa fa-bars"></i>`;
      

      getUL.appendChild(btnMenu);

      btnMenu.addEventListener('click',(e)=>{
         
         e.preventDefault();

         const appendTogetUL = document.querySelector('.navUL');

         const mobileDropMenu = document.createElement('div');
         mobileDropMenu.classList.add('mobileDrpMenu');

         appendTogetUL.appendChild(mobileDropMenu);

         createLiMobile();

      });

   return{
      getUL,
      btnMenu
   }

   };

   const getScrnRes = (()=>{
      let scrnResW = window.screen.width;
      let scrnResH = window.screen.height;
      
      if(scrnResW <= 900){
         console.log(scrnResW);
        
         let removeLi = document.querySelectorAll('.navLi');

         for(let i = 0; i < removeLi.length; i++){
            createLi.getUL.removeChild(removeLi[i]);
         };

         responsiveDOMUL();

      }
      return{
         scrnResW,
         scrnResH,
      };

   })();

   

};

export default navMenuDOM;