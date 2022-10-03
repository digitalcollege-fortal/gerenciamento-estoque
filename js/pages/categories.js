

export default function categories() {
    fetch('http://localhost:8000/categorias')
        .then(response => response.json())
        .then(dados => {
            dados.map(cat => {
                table_categories.innerHTML += `
                    <tr>
                        <td>${cat.id}</td>
                        <td>${cat.nome}</td>
                        <td>${cat.descricao}</td>
                        <td><img width="100px" src="${cat.foto}"></td>
                        <td>
                            <button class="btn btn-outline-warning">Editar</button>
                            <button onclick="removeCategory(${cat.id})" class="btn btn-outline-danger">Excluir</button>
                        </td>
                    </tr>
                `;
            });
        });


    return `
        <h1>Listar Categorias</h1>
        <hr>

        <table class="table table-hover table-striped">
            <thead class="table-dark">
                <tr>
                    <th>#Ref</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Foto</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody id="table_categories">
                
            </tbody>
        </table>
    `;
}