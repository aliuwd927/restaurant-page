

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
            arrayLi[0].innerHTML = `<a href="#" class="tabs__link">Home</a>`;
         }else if(index === 1){
            arrayLi[1].innerHTML = `<a href="#" class="tabs__link">Menu</a>`;
         }else if(index === 2){
            arrayLi[2].innerHTML = `<a href="#" class="tabs__link">Contact</a>`;
         }
      });

      return{

      }
   })();

}

export default navMenuDOM;