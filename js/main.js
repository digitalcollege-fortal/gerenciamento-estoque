import login from "./pages/login.js";
import branches from "./pages/branches.js";
import addBranch from "./pages/addBranch.js";
import categories from "./pages/categories.js";
import pagina01 from "./pages/pagina01.js";

let pages = {
    'addBranch': addBranch,
    'login': login,
    'categories': categories,
    'pagina01': pagina01,
    'branches': branches
};

document.querySelectorAll('[data-action="menu"]').forEach(  (item) => {
    item.addEventListener('click', () => {
        // let page = item.getAttribute('data-content'); 
        // content.innerHTML = window[page]();


        
        content.innerHTML = pages[item.dataset.content]();
    } );
}) //encerrando o querySelector
