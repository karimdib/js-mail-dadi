const emailUsers = [
    'karim.dib@gmail.com',
    'donatoriccio@gmail.com',
    'samuelpanicucci@gmail.com'
    ]

const requestUsers = (prompt('scrivi la tua email'))

if (requestUsers === emailUsers[0] ){
    console.log(alert('Confermato'))
} else if (requestUsers === emailUsers[1] ) {
    console.log(alert('Confermato'))
}else if (requestUsers === emailUsers[2]){
    console.log(alert('Confermato'))
}else{
    console.log(alert('Errore'))
}
