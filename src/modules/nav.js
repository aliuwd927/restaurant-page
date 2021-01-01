

function navMenuDOM(){
   const content = document.querySelector('.content');
   
   const navMenuContainer = document.createElement('div');
   const navMenuUL = document.createElement('ul');
   

   
   
   navMenuContainer.classList.add('navMenuCont');
   navMenuUL.classList.add('navUL');
   

   content.appendChild(navMenuContainer);
   navMenuContainer.appendChild(navMenuUL);

}

export default navMenuDOM;