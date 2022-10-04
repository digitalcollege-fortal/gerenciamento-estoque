export default function addCategory() {
    return `
        <h1>Nova Categoria</h1>

        <hr>

        <form onsubmit="salvarCategoria()">
            <label for="add_cat_nome">Nome</label>
            <input id="add_cat_nome" class="form-control mb-3">

            <label for="add_cat_desc">Descrição</label>
            <input id="add_cat_desc" class="form-control mb-3">

            <button class="btn btn-primary">Enviar</button>
        </form>
    `;    
}