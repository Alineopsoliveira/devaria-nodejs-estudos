const readLine = require('readline').createInterface({ 
    input : process.stdin,
    output : process.stdout
}); /*readLine Ler input na linha de comando */
/* require requisita */

readLine.question('Qual a sua idade? ', idade => {
    if(idade < 18){
        console.log('idade inferior a permitida, você não pode entrar')
    }else{
        
        
        console.log("Idade permitida, agora vamosverificar se seu nome está na lista");
        readLine.question('Qual o seu nome? ', nome => {
            switch(nome){
                case 'Aline' :
                    console.log('Aline, voce esta na lista, aproveite a festa!');
                    break; 
                case 'Ísis' :
                    console.log('Ísis, voce esta na lista, aproveite a festa!');
                    break;
                case 'Luísa' :
                    console.log('Luísa, voce esta na lista, aproveite a festa!')
                    break;
                case 'Italo' :
                    console.log('Italo, voce esta na lista, aproveite a festa!')
                    break;
                default:
                    console.log('Infelizmente seu nome não esta na lista');
        
        
            }
        }
        )
    }
}
)
