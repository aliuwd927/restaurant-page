

function navMenuDOM(){
   const content = document.querySelector('.content');
    const navMenuContainer = document.createElement('div');
    
    navMenuContainer.classList.add('navMenuCont');

    content.appendChild(navMenuContainer);

}

export default navMenuDOM;