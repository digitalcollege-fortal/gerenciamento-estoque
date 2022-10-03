async function removeCategory (id) {
    if (false === confirm('Tem certeza')) {
        return;
    }

    await fetch ('http://localhost:8000/categorias/'+id, {
        method: 'DELETE',
    });

    let btn = document.querySelector('[data-content="categories"]');

    btn.dispatchEvent(
        new Event('click')
    );
}