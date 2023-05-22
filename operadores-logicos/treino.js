const readLine = require('readLine').createInterface({
    input : process.stdin,
    output : process.stdout
}); 

console.log("Esse programa vai verificar se a pessoa está na lista de convidados e se possui a idade permitida para entrar na festa")

readLine.question('Qual o seu nome?', nome => {
    switch(nome){
        case 'Aline' :
            console.log('Aline, voce esta na lista, vamos verificar sua idade');
            break; 
        case 'Ísis' :
            console.log('Ísis, voce esta na lista, vamos verificar sua idade para liberar a entrada');
            break;
        case 'Luísa' :
            console.log('Luísa, voce esta na lista, vamos verificar sua idade para liberar a entrada')
            break;
        case 'Italo' :
            console.log('Italo, voce esta na lista, vamos verificar sua idade para liberar a entrada')
        default:
            console.log('Infelizmente seu nome não esta na lista');

    readLine.question('Qual a sua idade?', idade =>{
        if(idade < 18){
            console.log('idade inferior a permitida, você não pode entrar')
        }else{
            console.log('idade permitida, aproveite a festa')
        }
    }
)
    }
}
)