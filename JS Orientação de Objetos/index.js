import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Vinicius" , 11122233307);
const cliente2 = new Cliente("Lua" , 88822233301);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(1002, cliente2);

let valor = 200;
contaCorrenteRicardo.tranferir(200, conta2);

console.log(cliente1, cliente2);

