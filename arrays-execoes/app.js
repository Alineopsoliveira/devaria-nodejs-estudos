try{
    const listaDeProdutosDisponiveis = [
        "Pao",
        "Leite",
        "Cafe",
        "Laranja",
        "Macarrao",
        "Sabonete",
        "Detergente",
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{ /* o filtro vai filtrar com o parametro passado na function*/
        return listaDeArgumentos.find(argumento => argumento === produto); /* segundo check para ver se a lista de produtos é igual a lista de argumentos*/ 
    })
    
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos: ${produto}`));
    
    const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter( argumento => {
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento); 
    })
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto nos não temos ${argumento}`))
    
    listaDeProdutosDisponiveis.sort();
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto esta disponivel: ${produto}`));
}catch(e){
    console.log('Nao foi possivel executar pedido de compra');
}

