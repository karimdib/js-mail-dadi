
const userNumbers = Math.floor(Math.random() * (7 - 1) + 1); 
console.log(userNumbers)

const pcNumbers = Math.floor(Math.random() * (7 - 1) + 1); 
console.log(pcNumbers)

if( userNumbers > pcNumbers){
    console.log('lo user vince')
}else if (userNumbers === pcNumbers) {
    console.log('pareggio')
}else{
    console.log('il pc vince')
}