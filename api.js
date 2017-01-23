const Medicamento= require('./models/medicamento.js').Medicamento;  //importamos el medicamento

module.exports = (app, connection) => {
    // >> AQUI VA LA API << \\

    //app servidor web
    //connection "conexion base de datos" ( en berdad es un framework de persistencia)
    //Cuando pase una de las rutas aceptemos la peticion y hacer algo util
   
   //ruta login
    app.post('/login',(req,res)=>{
    
    
    });
    
    // ruta datos medicamentos
    app.get('/datos_medicamentos',(req,res)=>{
        let mediRepo = connection.getRepository("medicamento");
        //obtenemos una lista de medicamentos
        mediRepo.find({
            //Esto sirve para hacer el join automático
            //puede que sobre (comentar a todos)
            alias: "medicamento",
            innerJoinAndSelect: {
                "metadata": "medicamento.LABORATORIO"
            }
        }).then(r => {
            //le pasamos la informacion al servidor en este caso
            //la lista de medicamentos. Transformamos medicamentos
            //a JSON porque vamos a trabajar con esto.
            res.end(JSON.stringify(r));
        }).catch(e => {
            res.status(500).end(require('util').inspect(e));
        });
    });
    
    // ruta salir
    app.post('/salir',(req,res)=>{
    
    
    });
    
    //ruta insertar
    app.put('/insertar',(req,res)=>{
    
    
    });
    
    //ruta borrar
    app.delete('/borrar',(req,res)=>{
    
    
    });
    
    //ruta modificar
    app.post('/modificar',(req,res)=>{
    
    
    });
};
