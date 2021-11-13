const express = require ('express');

const app = express();


app.set('port', 5000)

app.listen(app.get('port'), () =>{
    console.log (`Bienvenido a mi aplicación de node puerto ${app.get('port')}`)
})

app.get('/', (req,res) => {

    res.send('Bienvenidos')
})