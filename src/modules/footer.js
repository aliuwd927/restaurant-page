
function footerDom(){
    const content = document.querySelector('.content');

    const footDom = document.createElement('footer');
    footDom.classList.add('footer');
    
    content.appendChild(footDom);
}

export default footerDom;