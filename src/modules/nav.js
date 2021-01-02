

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

      for(let i=0; i < 4; i++){
         const navLi = document.createElement('li');
         navLi.classList.add('navLi',i);
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
            arrayLi[0].textContent = 'Home';
         }else if(index === 1){
            arrayLi[1].textContent = 'Menu';
         }else if(index === 2){
            arrayLi[2].textContent = 'About';
         }else if(index === 3){
            arrayLi[3].textContent = 'Contact Us';
         };
      });

      return{

      }
   })();

}

export default navMenuDOM;