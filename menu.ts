import readlinesync = require('readline-sync');
import { colors } from './src/util/color';
import { Conta } from './src/model/conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

export function main(){

    let opcao: number;

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

        console.log(colors.bg.white, colors.fg.greenstrong,
            '****************************************        ');
        console.log('               BANCO VERDE              ');
        console.log('****************************************');
        console.log('                                        ');
        console.log('  1 - CRIAR CONTA                       ');
        console.log('  2 - LISTAR CONTAS                     ');
        console.log('  3 - BUSCAR CONTA POR NÚMERO           ');
        console.log('  4 - ATUALIZAR SEUS DADOS              ');
        console.log('  5 - EXCLUIR CONTA                     ');
        console.log('  6 - SACAR                             ');
        console.log('  7 - DEPOSITAR                         ');
        console.log('  8 - TRANSFERIR ENTRE CONTAS           ');
        console.log('  9 - SAIR                              ');
        console.log('                                        ');
        console.log('****************************************');
        console.log('                                        ',
        colors.reset);

        console.log(colors.bg.white, colors.fg.greenstrong, 
            ' Selecione a opção desejada:', colors.reset);
        opcao = readlinesync.questionInt('');

        if (opcao ==9){
            console.log(colors.bg.white, colors.fg.greenstrong, 
                '\n Verde como a Natureza, Forte como o Palmeiras: Banco Verde - Semeando Prosperidade em seu Caminho ');
            sobre();
            console.log(colors.reset,'');
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log(colors.bg.white, colors.fg.greenstrong,
                    '\n\nCriar Conta\n\n', colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.bg.white, colors.fg.greenstrong,
                    '\n\nListar Contas\n\n', colors.reset);

                    contas.listarTodas();

                    keyPress()                
                break;
            case 3:
                console.log(colors.bg.white, colors.fg.greenstrong,
                    '\n\nBUSCAR CONTA POR NÚMERO\n\n', colors.reset);
                   
                    keyPress()
                break;
            case 4:
                console.log(colors.bg.white, colors.fg.greenstrong,
                    '\n\nATUALIZAR SEUS DADOS\n\n', colors.reset);
                
                    keyPress()
                break;
            case 5:
                console.log(colors.bg.white, colors.fg.greenstrong,
                    '\n\nEXCLUIR CONTA\n\n', colors.reset);
                
                    keyPress()
                break;
            case 6:
                console.log(colors.bg.white, colors.fg.greenstrong,
                    '\n\nSACAR\n\n', colors.reset);
                
                    keyPress()
                break;
            case 7:
                console.log(colors.bg.white, colors.fg.greenstrong,
                    '\n\nDEPOSITAR\n\n', colors.reset);
                
                    keyPress()
                break;
            case 8:
                console.log(colors.bg.white, colors.fg.greenstrong,
                    '\n\nTRANSFERIR ENTRE CONTAS\n\n', colors.reset);
                
                    keyPress()
                break;
            default:
                console.log(colors.bg.white, colors.fg.greenstrong,
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