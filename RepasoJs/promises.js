// the promise is used for asynchronous requests that may or may not return a result to us.
let greet = new Promise((resolve, reject) => {
    setTimeout(() => {
        // 
        let greeting = "Hi dude"

        if(greeting){
            resolve(greeting);
        }else{
            reject("No greeting available")
        }
    }, 2000)
})

greet.then(result => {
    alert.apply(result);
}).catch( err => {
    alert.err(err)
})

Usuarios://Colección
    {// documento
    // campo: datos
        nombre: 'Alberto',
        apellido: 'Perez',
        email: 'alberto@email.com'
    }