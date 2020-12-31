import navMenuDOM from './modules/nav';

 function component() {
    const contentContainer = document.querySelector('#content');

    contentContainer.appendChild(navMenuDOM());

    return contentContainer;
 };

 component();
