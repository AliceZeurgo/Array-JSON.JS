/*********************************************************************
 * Objetivo: Aprender a trabalhar com estrutura de dados Array e JSON
 * Data: 29/09/2023
 * Autor: Alice Zeurgo
 * Versao: 1.0
 *********************************************************************/

// [] -> Representa a estrutura Array 
// {} -> Representa a estrutura JSON

const introducaoArray = function () {
    // Criando um Array de forma manual 
    let listaDeNomes = ['José', 'Ana', 'Luiz', 'Maria', 'Carlos', 'Eduardo']

    // Exibe os dados do Array
    console.log(listaDeNomes);

    // Exibe os dados do Array em forma de tabela
    console.table(listaDeNomes);

    // Retorna a quantidade de elementos de um Array
    console.log(listaDeNomes.length);

    // Adiciona um nome no final da lista
    listaDeNomes.push('Roberto');

    // Adiciona um nome no começo da lista
    listaDeNomes.unshift('Ricardo')

    console.table(listaDeNomes);

    // Remove o ultimo elemento do Array
    listaDeNomes.pop();

    // Remove o primeiro elemento do Array
    listaDeNomes.shift();
    console.table(listaDeNomes);

    // Remover um elemento baseado no indice, podendo definir a quantidade de itens a serem excluídos
    // Ex: splice(2,3) -> 2 é referente a indice e 3 é referente a quantidade de itens
    listaDeNomes.splice(2, 3);
    console.table(listaDeNomes);


}

const percorrendoArray = function () {
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD']

    // While
    // let cont = 0; 
    // while(cont < listaDeProdutos.length){
    //     console.log('Nome do produto: ' + listaDeProdutos[cont]);
    //     cont += 1;
    // }

    // For 
    // for(let cont=0; cont < listaDeProdutos.length; cont++) {
    //     console.log('Nome do produto: ' + listaDeProdutos[cont]);
    // }

    // Foreach
    // listaDeProdutos.forEach(function(produto, indice){
    //     console.log(indice + ' - Nome do produto: ' + produto)
    // })

    // Retorna o indice do Array que foi encontrado
    // Caso não exista o item buscado retorna -1
    console.log(listaDeProdutos.indexOf('Impressora'))

    // Retorna verdadeiro ou falso
    console.log(listaDeProdutos.includes('Monitor'))
}

const filtrarProduto = function (nomeProduto) {
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD']
    let nome = String(nomeProduto);

    let status = false;

    // return listaDeProdutos.includes(nome);

    listaDeProdutos.forEach(function (produto) {
        if (produto.toUpperCase() == nome.toUpperCase())
            status = true;
    })

    return status;

}

const manipularArrayJson = function () {
    {
        /*
        Existem diversos tipos de dados para integração na tecnologia 
               Exemplo 1 - XML <atributo> valor </atributo>
        // Exemplo 2 - JSON {atributo: valor} -> JSON
        */

        //Criando um JSON manual
        let contato = { nome: "Eduardo Tavares", telefone: "47727889", email: "EduardoTavares@gmail.com", idade: 17 };
        let contato2 = { nome: "Alice Zeurgo", telefone: "971427480", email: "Alicezcruz2018@gmail.com" };
        let contato3 = { nome: "Luana Magalhães", telefone: "46182814", email: "LuanaMaga@gmail.com" };
        let arrayContatos = [contato, contato2, contato3];

        // Criando novos atributos no JSON de forma dinamica
        contato.celular = "971427480"
        contato.data_nascimento = "2007-04-16"
        console.log(contato)




        console.log(arrayContatos);



        // Percorrendo array e JSON:
        // Os ifs foram usados para validar a impressão dos valores
        arrayContatos.forEach(function (dados) {

            console.log("Nome: " + dados.nome);
            console.log("Telefone: " + dados.telefone);
            console.log("Email: " + dados.email);
            if (dados.celular != undefined)
                console.log("Celular: " + dados.celular);
            if (dados.data_nascimento != undefined)
                console.log("Data de nascimento: " + dados.data_nascimento);
            if (dados.idade != undefined)
                console.log("Idade: " + dados.idade);
            console.log("---------------------------")

        })
    }
}

const produtosArrayJSON = function () {
    let listaCores = [
        { id: 1, nome: 'Branco' },
        { id: 2, nome: 'Preto' },
        { id: 3, nome: 'Cinza' },
        { id: 4, nome: 'Rosa' },
        { id: 5, nome: 'Vermelho' },
        { id: 6, nome: 'Azul' }
    ];

    let listaMarca = [
        { id: 1, nome: 'Dell' },
        { id: 2, nome: 'Lenovo' },
        { id: 3, nome: 'Apple' },
        { id: 4, nome: 'Logitech' },
        { id: 5, nome: 'Positivo' },
        { id: 6, nome: 'Multilaser' },
        { id: 7, nome: 'Razer' },
    ];
    let listaCategorias = [

        { id: 1, nome: 'Hardware', descricao: 'Hardware' },
        { id: 2, nome: 'Périférico', descricao: 'Periférico' },
        { id: 3, nome: 'Gamer', descricao: 'Gamer' },
        { id: 4, nome: 'Acessórios', descricao: 'Acessórios' }

    ]
    //Cria um objeto do tipo JSON para o array de produtos                    
    let JSONProdutos = {};

    //Cria um produto do tipo ARRAY para guardar os produtos
    let ARRAYProdutos = [];

    //Objeto para criar os produtos
    let produto1 = {
        id: 1,
        nome: "Mouse",
        descricao: "Mouse optico com fio",
        categoria: listaCategorias[1],
        marca: listaMarca[0],
        cor: [
            listaCores[0],
            listaCores[1],
            listaCores[2]

        ]
    };
    console.log(produto1);

    let produto2 = {
        id: 2,
        nome: "Teclado",
        descricao: "Teclado com fio padrão ABNT",
        categoria: listaCategorias[1],
        marca: listaMarca[3],
        cor: listaCores
    };
    console.log(produto2);

    let produto3 = {
        id: 3,
        nome: "Monitor",
        descricao: "Monitor de alta qualidade",
        categoria: listaCategorias[1],
        marca: listaMarca[2],
        cor: listaCores[0]
    };

    //Adicionando os produtos no array de produtos
    ARRAYProdutos.push(produto1);
    ARRAYProdutos.push(produto2);

    JSONProdutos.produto = ARRAYProdutos;
    JSONProdutos.count = ARRAYProdutos;
    JSONProdutos.status = 200;

    console.log(ARRAYProdutos);

    JSONProdutos.produto = ARRAYProdutos

}
produtosArrayJSON();

//manipularArrayJson();
