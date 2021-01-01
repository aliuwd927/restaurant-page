
function sectionDom(){
    const content = document.querySelector('.content');
    const sectionDOM = document.createElement('section');
    sectionDOM.classList.add('sectionDom');
    content.appendChild(sectionDOM);
}

export default sectionDom;