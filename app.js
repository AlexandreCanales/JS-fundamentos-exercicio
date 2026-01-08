function olaMundo(){
    console.log('Olá,mundo!');
}

function saudacao(nome) {
    console.log('Olá,',nome);
}

function dobro(num) {
        console.log (parseInt (num*2));
    
}

function media(n1,n2,n3){
    let soma = parseInt(n1+n2+n3);
    let media3 = soma/3;
    console.log(media3);
}

function maior(n1,n2){
    if (n1>n2) {
        console.log(n1);        
    } else if (n2>n1) {
        console.log(n2);
    }    
}

function quadrado(num){
    console.log(parseInt(num**2))


}

olaMundo();
saudacao('Yuri Alberto');
dobro(2);
media(3,6,12);
maior(5,3);
quadrado(2);