document.querySelectorAll('[data-action="menu"]').forEach(  (item) => {
    item.addEventListener('click', () => {
        // let page = item.getAttribute('data-content'); 
        // content.innerHTML = window[page]();
        
        content.innerHTML = window[item.dataset.content]();
    } );
}) //encerrando o querySelector
