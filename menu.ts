import readlinesync = require('readline-sync');
import { colors } from './src/util/color';
import { Conta } from './src/model/conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';
import { read } from 'fs';

export function main(){

    let opcao, numero, agencia, tipo, saldo, limite, valor, numeroDestino, aniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente','Conta Poupanca'];

    // Instancia (criação da classe controller)
    let contas: ContaController = new ContaController();

    let cc1: ContaCorrente = new ContaCorrente (2, 123, 1, "Juninho o MAIS MAIS", 15000, 1000);


    // // Objeto  Conta 
    // const conta: Conta = new Conta(1, 123, 1, "Vitinho Mlk Problema", 10000);
    // conta.visualizar();
    // conta.sacar(10500);
    // conta.visualizar();
    // conta.depositar(5000);
    // conta.visualizar();

//    // Objeto ContaCorrente 
//     const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Juninho o MAIS MAIS", 15000, 1000);
//     contacorrente.visualizar();
//     contacorrente.sacar(2000);
//     contacorrente.visualizar();
//     contacorrente.depositar(1000);
//     contacorrente.visualizar();

//     // Objeto ContaPoupanca 
//     const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Kleber BamBam", 1000, 10);
//     contapoupanca.visualizar();
//     contapoupanca.sacar(200);
//     contapoupanca.visualizar();
//     contapoupanca.depositar(1000);
//     contapoupanca.visualizar();

    while (true){

        console.log(colors.fg.greenstrong,
                '****************************************'                          );
        console.log('               BANCO VERDE              ');
        console.log(' ****************************************');
        console.log('                                        ');
        console.log('  1 - CRIAR CONTA                       ');
        console.log('  2 - LISTAR CONTAS                     ');
        console.log('  3 - BUSCAR CONTA POR NÚMERO           ');
        console.log('  4 - ATUALIZAR SEUS DADOS              ');
        console.log('  5 - EXCLUIR CONTA                     ');
        console.log('  6 - SACAR                             ');
        console.log('  7 - DEPOSITAR                         ');
        console.log('  8 - TRANSFERIR ENTRE CONTAS           ');
        console.log('  9 - BUSCAR CONTAS POR TITULAR         ');
        console.log('  0 - SAIR                              ');
        console.log('                                        ');
        console.log('****************************************');
        console.log('                                        ',
        colors.reset);

        console.log(colors.fg.greenstrong, 
            ' Selecione a opção desejada:', colors.reset);
        opcao = readlinesync.questionInt('');

        if (opcao ==0){
            console.log(colors.fg.greenstrong, 
                '\n****************************************');
            console.log(colors.fg.greenstrong, 
                '\n      VERDE COMO A NATUREZA     ');
            console.log(colors.fg.greenstrong, 
                '\n      FORTE COMO O PALMEIRAS    ');
            console.log(colors.fg.greenstrong, 
                '\n           BANCO VERDE           ');
            console.log(colors.fg.greenstrong, 
                '\n SEMEANDO PROSPERIDADE EM SEU CAMINHO ');
            console.log('                                        ')
            sobre();
            console.log(colors.reset,'');
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log(colors.fg.greenstrong, "\n\nCriar Conta\n\n", colors.reset);

                console.log("Digite o número da Agência: ")
                agencia = readlinesync.questionInt("")

                console.log("Digite o nome do Titular: ")
                titular = readlinesync.question("")

                console.log("Informe o tipo da Conta: ")
                tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) + 1

                console.log("Digite o Saldo da Conta: ")
                saldo = readlinesync.questionFloat("")

                switch(tipo){ // Entrar com os dados da conta corrente
                    case 1:
                        console.log("Digite o Limite da Conta: ")
                        limite = readlinesync.questionFloat("")
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        )
                        break;
                    case 2: // Entrar com os dados da Conta Poupança
                        console.log("Digite o dia do aniversário da Conta: ")
                        aniversario = readlinesync.questionFloat("")
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )
                        break;

                }

                keyPress()
                break;

            case 2:
                console.log(colors.fg.greenstrong,
                    '\n\nListar Contas\n\n', colors.reset);

                    contas.listarTodas();

                    keyPress()                
                break;
            case 3:
                console.log(colors.fg.greenstrong,
                    '\n\nBUSCAR CONTA POR NÚMERO\n\n', colors.reset);

                    console.log("Digite o Número da Conta: ");
                    numero = readlinesync.questionInt("");
    
                    contas.procurarPorNumero(numero);
                   
                    keyPress()
                break;
            case 4:
                console.log(colors.fg.greenstrong,
                    '\n\nATUALIZAR SEUS DADOS\n\n', colors.reset);
                    console.log("Digite o Número da Conta: ")
                    numero = readlinesync.questionInt("")
    
                    let conta = contas.buscarNoArray(numero)
    
                    if (conta !== null) {
    
                        console.log("Digite o Número da Agência: ")
                        agencia = readlinesync.questionInt("")
    
                        console.log("Digite o Nome do Titular: ")
                        titular = readlinesync.question("")
    
                        tipo = conta.tipo
    
                        console.log("Digite o Saldo da Conta: ")
                        saldo = readlinesync.questionFloat("")
    
                        switch (tipo) {
                            case 1:
                                console.log("Digite o Limite da Conta: ")
                                limite = readlinesync.questionFloat("")
                                contas.atualizar(
                                    new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                                )
                                break;
                            case 2:
                                console.log("Digite o dia do aniversário da Conta: ")
                                aniversario = readlinesync.questionInt("")
                                contas.atualizar(
                                    new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                                )
                                break;
                        }
    
                        }else {
                            console.log("A Conta não foi Encontrada!")
                        }
    
                keyPress()
                break;

            case 5:
                console.log(colors.fg.greenstrong,
                    '\n\nEXCLUIR CONTA\n\n', colors.reset);
                    
                console.log("Digite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                contas.deletar(numero);
                
                keyPress()
                break;
            case 6:
                console.log(colors.fg.greenstrong,
                    '\n\nSACAR\n\n', colors.reset);

                    console.log("Digite o número: ");
                    numero = readlinesync.questionInt("");

                    console.log("\nDigite o valor do Saque (R$): ");
                    valor = readlinesync.questionFloat("");

                    contas.sacar(numero, valor);
                
                    keyPress()
                break;
            case 7:
                console.log(colors.fg.greenstrong,
                    '\n\nDEPOSITAR\n\n', colors.reset);

                    console.log("Digite o número da conta: ");
                    numero = readlinesync.questionInt("");

                    console.log("\nDigite o valor do Depósito (R$): ");
                    valor = readlinesync.questionFloat("");
                
                    keyPress()
                break;
            case 8:
                console.log(colors.fg.greenstrong,
                    '\n\nTRANSFERIR ENTRE CONTAS\n\n', colors.reset);

                    console.log("Digite o número da Conta de Origem: ");
                    numero = readlinesync.questionInt("");

                    console.log("\nDigite o número da Conta de Destino: ");
                    numeroDestino = readlinesync.questionFloat("");

                    console.log("\nDigite o valor do Depósito (R$): ");
                    valor = readlinesync.questionFloat("");

                    contas.transferir(numero, numeroDestino, valor);

                
                    keyPress()
                    break;
            case 9:
                console.log(colors.fg.greenstrong,
                    '\n\nCONSULTAR CONTA POR TITULAR\n\n', colors.reset);

                    console.log("Digite o Nome do Titular: ")
                    titular = readlinesync.question("")

                    contas.procurarPorTitular(titular);

                    break;
            default:
                console.log(colors.fg.greenstrong,
                    '\nOpção Inválida!\n', colors.reset);
                    
                break;
        }
    }
}

export function sobre(): void{
    console.log('****************************************');
    console.log('Projeto Desenvolvido por:              ');
    console.log('Vitor Monea - vitormonea2000@gmail.com ');
    console.log('https://github.com/vmonea               ');
    console.log('****************************************');
        
}

function keyPress(): void{
    console.log(colors.reset,'');
    console.log('\nPressione enter para continuar');
    readlinesync.prompt();
}

main();