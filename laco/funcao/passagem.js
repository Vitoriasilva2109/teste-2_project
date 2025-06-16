function adicionarItem(lista){
    lista.push("Novo item");
}
let itens = ["Item 1", "Item 2"];
adicionarItem(itens);
console.log(itens); //["Item 1", "Item 2", "Novo item"]