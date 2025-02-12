let productList = [];

document.getElementById("iniciarCadastro").addEventListener("click", () => {
    document.getElementById("form-container").style.display = "block";
});

document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = parseFloat(document.getElementById("price").value);
    const available = document.getElementById("available").value;

const product = { name, description, price, available };

        // Adicionando o produto na lista
        productList.push(product);
        productList.sort((a, b) => a.price - b.price); // Configurando a ordem do menor para o maior valor
    
        // Limpando o formulário
        document.getElementById("productForm").reset();
    
        // Fechando o formulário
        document.getElementById("form-container").style.display = "none";
    
        // Atualizando a listagem
        updateProductList();
    });

    function updateProductList() {

        const tbody = document.querySelector("#productTable tbody");

        tbody.innerHTML = "";  // Limpa a tabela antes de atualizar
    
        productList.forEach(product => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${product.name}</td><td>R$ ${product.price.toFixed(2)}</td>`;
            tbody.appendChild(row);
        });
    }