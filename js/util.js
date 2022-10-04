function abrirModal(id) {
    input_excluir.value = id;
}

async function removeCategory () {
    await fetch ('http://localhost:8000/categorias/'+ input_excluir.value, {
        method: 'DELETE',
    });

    let btn = document.querySelector('[data-content="categories"]');

    btn.dispatchEvent(
        new Event('click')
    );
}

async function salvarCategoria() {
    event.preventDefault();
    
    let dados = {
        nome: add_cat_nome.value,
        descricao: add_cat_desc.value,
        foto: '',
    };

    await fetch('http://localhost:8000/categorias', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    document.querySelector('[data-content="categories"]').dispatchEvent(
        new Event('click')
    )
}