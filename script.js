class Produto {
  constructor(nome, qtd, preco) {
    this.nome = nome;
    this.qtd = qtd;
    this.preco = preco;
  }
}

let listaProdutos = [];

function Enviar() {
  let nome = document.getElementById("nome").value;
  let qtd = document.getElementById("qtd").value;
  let preco = document.getElementById("preco").value;
  let valido = false;

  if (!nome || !qtd || !preco) {
    alert("Por favor complete todas as caixas do formulário!");
  } else {
    valido = true;
  }

  if (valido) {
      let novoProduto = new Produto(nome, qtd, preco);
      listaProdutos.push(novoProduto);

      revelar();

      document.getElementById("nome").value = "";
      document.getElementById("qtd").value = "";
      document.getElementById("preco").value = "";
  } 
  else { 
    revelar();
  }
} 

function revelar() {
    document.getElementById("lista").innerHTML = "";

    listaProdutos.forEach((produto, index) => {
        const li = document.createElement("li");
        const btm = document.createElement("button");

        btm.textContent = "Remover";
        btm.style.marginLeft = "10px";
        btm.addEventListener("click", () => eliminar(index));

        li.textContent = `Nome: ${produto.nome}, quantidade: ${produto.qtd}, preço: ${produto.preco}`;
        li.appendChild(btm);
        document.getElementById("lista").appendChild(li);
  });
}

function eliminar(index) {
  listaProdutos.splice(index, 1);
  revelar();
}