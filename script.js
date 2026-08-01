let carrinho = [];

function adicionar(nome, preco) {
    carrinho.push({
        nome: nome,
        preco: preco
    });

    atualizarCarrinho();
}

function abrirModalClassico() {
    document.getElementById("modalClassico").style.display = "flex";
}

function abrirModalPremium() {
    document.getElementById("modalPremium").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modalClassico").style.display = "none";
    document.getElementById("modalPremium").style.display = "none";
}

function confirmarClassico() {

    let whisky = document.getElementById("whiskyClassico").value;
    let energetico = document.getElementById("energeticoClassico").value;
    let obs = document.getElementById("obsClassico").value;

    carrinho.push({
        nome: "Copão Clássico",
        preco: 25,
        detalhes: "Whisky: " + whisky + " | Energético: " + energetico,
        obs: obs
    });

    fecharModal();

    atualizarCarrinho();
}

function confirmarPremium() {

    let whisky = document.getElementById("whiskyPremium").value;
    let energetico = document.getElementById("energeticoPremium").value;
    let obs = document.getElementById("obsPremium").value;

    carrinho.push({
        nome: "Copão Premium",
        preco: 40,
        detalhes: "Whisky: " + whisky + " | Energético: " + energetico,
        obs: obs
    });

    fecharModal();

    atualizarCarrinho();
    function atualizarCarrinho() {

    document.getElementById("qtdCarrinho").innerText = carrinho.length;

    let lista = document.getElementById("listaCarrinho");

    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach((item) => {

        total += item.preco;

        lista.innerHTML += `
        <div style="margin-bottom:15px;border-bottom:1px solid #444;padding-bottom:10px;">
            <strong>${item.nome}</strong><br>

            ${item.detalhes ? item.detalhes + "<br>" : ""}

            ${item.obs ? "Obs: " + item.obs + "<br>" : ""}

            R$ ${item.preco.toFixed(2)}
        </div>
        `;

    });

    document.getElementById("totalCarrinho").innerText =
        "Total: R$ " + total.toFixed(2);
}

function abrirCarrinho() {

    let painel = document.getElementById("painelCarrinho");

    if (painel.style.display == "block")
        painel.style.display = "none";
    else
        painel.style.display = "block";
}

function finalizarPedido() {

    let mesa = document.getElementById("numeroMesa").value;

    if (mesa == "") {

        alert("Informe o número da mesa.");

        return;

    }

    if (carrinho.length == 0) {

        alert("Carrinho vazio.");

        return;

    }

    let texto = "🍻 *Pedido - Dose Certa*%0A%0A";

    texto += "🪑 Mesa: " + mesa + "%0A%0A";

    let total = 0;

    carrinho.forEach(item => {

        texto += "• " + item.nome + "%0A";

        if (item.detalhes)
            texto += item.detalhes + "%0A";

        if (item.obs)
            texto += "Obs: " + item.obs + "%0A";

        texto += "R$ " + item.preco.toFixed(2) + "%0A%0A";

        total += item.preco;

    });

    texto += "💰 Total: R$ " + total.toFixed(2);

    window.open(
        "https://wa.me/5514996100151?text=" + texto,
        "_blank"
    );
}
}
