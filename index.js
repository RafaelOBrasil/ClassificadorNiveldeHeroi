const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o valor total do XP para verificar o nivel: ', (XP) => {
    if (XP <= 1000) {
        console.log("Ferro")
    } else if(XP <= 2000) {
        console.log("Bronze")
    }else if(XP <= 5000) {
        console.log("Prata")
    }else if(XP <= 7000) {
        console.log("Ouro")
    }else if(XP <= 8000) {
        console.log("Platina")
    }else if(XP <= 9000) {
        console.log("Ascendente")
    }else if(XP <= 10000) {
        console.log("Imortal")
    }else{
        console.log("Radiante")
    }


    rl.close()
});




