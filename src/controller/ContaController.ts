import { arrayBuffer } from "stream/consumers";
import { Conta } from "../model/conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

    private listaConta: Array<Conta> = new Array<Conta>();

    numero: number =0;

    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.");
    }
    listarTodas(): void {
        for (let conta of this.listaConta){
            conta.visualizar();
        };
    }
    cadastrar(conta: Conta): void {
        this.listaConta.push(conta);
        console.log('A conta foi adicionada com sucesso!')
        throw new Error("Method not implemented.");
    }
    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    
}