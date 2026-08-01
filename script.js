let carrinho = [];

function adicionar(nome, preco) {
    carrinho.push({
        nome,
        preco
    });

    atualizarCarrinho();
}

function atualizarCarrinho() {

    let lista = document.getElementById("listaCarrinho");
    let totalTexto = document.getElementById("totalCarrinho");

    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach((item, index) => {

        total += item.preco;

        lista.innerHTML += `
        <div class="produto">
            <strong>${item.nome}</strong><br>
            ${item.detalhes ? item.detalhes + "<br>" : ""}
            ${item.obs ? "Obs: " + item.obs + "<br>" : ""}
            R$ ${item.preco.toFixed(2)}
            <br><br>
            <button onclick="remover(${index})">Remover</button>
        </div>
        `;

    });

    totalTexto.innerHTML = "Total: R$ " + total.toFixed(2);
}

function remover(index){
    carrinho.splice(index,1);
    atualizarCarrinho();
}

function abrirCarrinho(){
    document.getElementById("carrinho").scrollIntoView({
        behavior:"smooth"
    });
}

function abrirModalClassico(){
    document.getElementById("modalClassico").style.display="flex";
}

function abrirModalPremium(){
    document.getElementById("modalPremium").style.display="flex";
}

function fecharModal(){
    document.getElementById("modalClassico").style.display="none";
    document.getElementById("modalPremium").style.display="none";
}

function confirmarClassico(){

    let whisky=document.getElementById("whiskyClassico").value;
    let energetico=document.getElementById("energeticoClassico").value;
    let obs=document.getElementById("obsClassico").value;

    carrinho.push({
        nome:"🥃 Copão Clássico",
        preco:25,
        detalhes:"Whisky: "+whisky+" | Energético: "+energetico,
        obs:obs
    });

    fecharModal();

    atualizarCarrinho();

}

function confirmarPremium(){

    let whisky=document.getElementById("whiskyPremium").value;
    let energetico=document.getElementById("energeticoPremium").value;
    let obs=document.getElementById("obsPremium").value;

    carrinho.push({
        nome:"🔥 Copão Premium",
        preco:40,
        detalhes:"Whisky: "+whisky+" | Energético: "+energetico,
        obs:obs
    });

    fecharModal();

    atualizarCarrinho();

}

function finalizarPedido(){

    let mesa=document.getElementById("numeroMesa").value;

    if(mesa==""){
        alert("Informe a mesa.");
        return;
    }

    if(carrinho.length==0){
        alert("Carrinho vazio.");
        return;
    }

    let texto="🍻 *Pedido Dose Certa*%0A%0A";

    texto+="🪑 Mesa: "+mesa+"%0A%0A";

    let total=0;

    carrinho.forEach(item=>{

        texto+="• "+item.nome+"%0A";

        if(item.detalhes)
            texto+=item.detalhes+"%0A";

        if(item.obs)
            texto+="Obs: "+item.obs+"%0A";

        texto+="R$ "+item.preco.toFixed(2)+"%0A%0A";

        total+=item.preco;

    });

    texto+="💰 Total: R$ "+total.toFixed(2);

    window.open(
        "https://wa.me/5514996100151?text="+texto,
        "_blank"
    );

}
