document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let veiculo = document.getElementById("veiculo").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    if(!nome || !telefone || !veiculo){
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    let texto = `Olá, meu nome é ${nome}. Telefone: ${telefone}. 
Tenho interesse em proteção veicular para ${veiculo}. ${mensagem}`;

    let url = `https://wa.me/558195028678?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
});
