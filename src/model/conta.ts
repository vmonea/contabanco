import { colors } from '../util/color';
export abstract class Conta{
    static visualizar() {
        throw new Error("Method not implemented.");
    }

    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;


	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}


    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Getter agencia
     * @return {number}
     */
	public get agencia(): number {
		return this._agencia;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get tipo(): number {
		return this._tipo;
	}

    /**
     * Getter titular
     * @return {string}
     */
	public get titular(): string {
		return this._titular;
	}

    /**
     * Getter saldo
     * @return {number}
     */
	public get saldo(): number {
		return this._saldo;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
	}

    /**
     * Setter agencia
     * @param {number} value
     */
	public set agencia(value: number) {
		this._agencia = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set tipo(value: number) {
		this._tipo = value;
	}

    /**
     * Setter titular
     * @param {string} value
     */
	public set titular(value: string) {
		this._titular = value;
	}

    /**
     * Setter saldo
     * @param {number} value
     */
	public set saldo(value: number) {
		this._saldo = value;
	}

    public sacar(valor: number){
        if(this._saldo >= valor){
           this._saldo - valor;
            return true;
        }
            console.log("Saldo Insuficiente!")
            return false;
    }

    public depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    public visualizar(): void{

        let tipo: string ="";

        switch(this._tipo){
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança"
                break;
        }

       console.log(colors.fg.greenstrong,
        '***********************************');
       console.log('DADOS DA CONTA');
       console.log('***********************************');
       console.log(`NÚMERO DA CONTA: ${this._numero}`);
       console.log(`NÚMERO DA AGÊNCIA: ${this._agencia}`);
       console.log(`TIPO DE CONTA: ${tipo}`);
       console.log(`TITULAR DA CONTA: ${this._titular}`);
       console.log(`SALDO DA CONTA: ${this._saldo}`, colors.reset);
    }

}