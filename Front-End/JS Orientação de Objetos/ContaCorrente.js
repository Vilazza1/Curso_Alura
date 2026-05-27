import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _clinte;
    static numeroDeContas = 0;

    set clinte(novoValor) {
        if (novoValor instanceof Cliente) {
            this._clinte = novoValor;
        }
    }

    get clinte(){
        return this._clinte
    }

    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    get saldo(){
        return this.saldo
    }

    constructor (agencia, clinte){
        this.agencia = agencia;
        this.clinte = clinte;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }

        this._saldo += valor;
    }

    tranferir(valor, conta) {
        conta.cidade = "São Paulo"
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}