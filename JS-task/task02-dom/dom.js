function changeOuterLinks() {
    let navElem = document.querySelector('#link-list');
    let links = document.querySelectorAll('#link-list > a')
    links.forEach(elem => {
        if (elem.innerHTML.includes("outer-link")) {
            elem.target = "_blank";
        /*  elem.setAttribute('target', '_blank'); */
            elem.innerHTML = `<strong>${elem.innerHTML}</strong>`;
        }
    })
    navElem.style.display = 'flex';
    navElem.style.flexDirection = 'column';
    navElem.style.width = '30%';
    navElem.style.margin = '0 auto';
    navElem.style.border = '1px solid blue';
    navElem.style.padding = '16px';


      
   
}

export { changeOuterLinks };