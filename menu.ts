import readlinesync = require('readline-sync');
import { colors } from './src/util/color';

export function main(){

    let opcao: number;

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

                break;
            case 2:
                console.log(colors.bg.white, colors.fg.greenstrong,
                    '\n\nListar Contas\n\n', colors.reset);
                
                break;
            case 3:
                console.log(colors.bg.white, colors.fg.greenstrong,
                    '\n\nBUSCAR CONTA POR NÚMERO\n\n', colors.reset);
                
                break;
            case 4:
                console.log(colors.bg.white, colors.fg.greenstrong,
                    '\n\nATUALIZAR SEUS DADOS\n\n', colors.reset);
                
                break;
            case 5:
                console.log(colors.bg.white, colors.fg.greenstrong,
                    '\n\nEXCLUIR CONTA\n\n', colors.reset);
                
                break;
            case 6:
                console.log(colors.bg.white, colors.fg.greenstrong,
                    '\n\nSACAR\n\n', colors.reset);
                
                break;
            case 7:
                console.log(colors.bg.white, colors.fg.greenstrong,
                    '\n\nDEPOSITAR\n\n', colors.reset);
                
                break;
            case 8:
                console.log(colors.bg.white, colors.fg.greenstrong,
                    '\n\nTRANSFERIR ENTRE CONTAS\n\n', colors.reset);
                
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