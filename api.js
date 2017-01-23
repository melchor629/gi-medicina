const Medicamento= require('./models/medicamento.js');  //importamos el medicamento

module.exports = (app, connection) => {
    // >> AQUI VA LA API << \\
    
    console.log("pato");
    //app servidor web
    //connection "conexion base de datos" ( en berdad es un framework de persistencia)
    //Cuando pase una de las rutas aceptemos la peticion y hacer algo util
   
   //ruta login
    app.post('/login',(req,res)=>{
    
    
    });
    
    // ruta datos medicamentos
    app.get('/datos_medicamentos',(req,res)=>{
      console.log("pato");
    let medicamentos= connection.entityManager.find(Medicamento);//obtenemos una lista de medicamentos
    res.end(JSON.stringify(medicamentos));// le pasamos la informacion al servidor en este caso la lista de medicamentos. Transformamos medicamentos a JSON porque vamos a trabajar con esto.
    
    
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
