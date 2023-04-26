/*
Variáveis
*/

// Tipos primitivos: boolean, number, string

let ligado: boolean = false;
let nome: string = "Jonathan";
let idade: number = 30;
let altura: number = 1.80;

// Tipos especiais: null, undefined

// null
let nulo: null = null;
// undefined
let indefinido: undefined = undefined;

// Tipos abrangentes: any, void

// any
let retornoView: any
// void
let retorno: void

// objeto sem previsibilidade

let produto: object = {
    name: "Jonathan",
    cidade: "Teresina",
    idade: 30
};

// objeto tipado - com previsibilidade

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5,
};

/**
 *  arrays
 */

let dados: string[] = ["Jonathan", "Junior", "Maria"];
let dados2: Array<String> = ["Jonathan", "Junior", "Maria"];

/**
 *  arrays mult tipos
 */

let infos: (string | number)[] = ["Jonathan", 222];

/**
 *  Tuplas
 */

let boleto: [string, number, number] = ["agua", 199.99, 58];

/**
 *  arrays métodos
 */

dados.map
dados.filter
dados.push

/**
 *  Datas
 */

let aniversario: Date = new Date("2023-04-01 05:00");
console.log(aniversario.toString());