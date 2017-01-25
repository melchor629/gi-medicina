module.exports = (app, connection) => {
    // >> AQUI VA LA API << \\

    //app servidor web
    //connection "conexion base de datos" ( en berdad es un framework de persistencia)
    //Cuando pase una de las rutas aceptemos la peticion y hacer algo util
   
   //ruta login
    app.post('/login',(req,res)=>{
        let modiRepo = connection.getRepository("usuario");
        modiRepo.find({nombre: req.body.nombre, password: req.body.password}).then(r => {
            if(r.length === 1) {
             let modiPermiso = connection.getRepository("permiso");
             modiPermiso.find({rolName: r[0].rolName}).then(q => {
                res.end(JSON.stringify({
                    permisos: q,
                    token: 'pato'
                }));

             }).catch(e => {
                 res.status(500).end(require('util').inspect(e));
             });
            } else {
                res.status(404).json({ok:false});
            }

        }).catch(e => {
            res.status(500).end(require('util').inspect(e));
        });
    
    });
    
    // ruta datos medicamentos
    app.get('/datos_medicamentos',(req,res)=>{
        let mediRepo = connection.getRepository("medicamento");
        //obtenemos una lista de medicamentos
        mediRepo.find().then(r => {
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
        res.json({ok: true});
    
    });
    
    //ruta insertar
    app.put('/insertar',(req,res)=>{
        let mediRepo = connection.getRepository("medicamento");
        mediRepo.query("SELECT MAX(ID_MEDICAMENTO) FROM medicamento;").then(r => {
            let medicamentoNuevo = {
                "ID_MEDICAMENTO": Number(r[0]['MAX(ID_MEDICAMENTO)']) + 1,
                "NOMBRE_MEDICAMENTO":req.body.nombre,
                "CANTIDAD_DISPONIBLE":req.body.cantidad,
                "LABORATORIO":req.body.laboratorio
            };
            mediRepo.persist(medicamentoNuevo).then(() => {
                res.json({ok:true,id:Number(r[0]['MAX(ID_MEDICAMENTO)'])+ 1});
            }).catch(e => {
                res.status(500).end(require('util').inspect(e));
            });
        });

            
    });
    
    //ruta borrar
    app.delete('/borrar/:id',(req,res)=>{
        let mediRepo = connection.getRepository("medicamento");
        mediRepo.find({ID_MEDICAMENTO: req.params.id}).then( r => {
            mediRepo.remove(r).then(() => {
                res.json({ok:true});
            }).catch(e => {
                res.status(500).end(require('util').inspect(e));
            });
        }).catch(e => {
            res.status(500).end(require('util').inspect(e));
        });
    
    });
    
    //ruta modificar
    app.put('/modificar',(req,res)=>{
     let mediRepo = connection.getRepository("medicamento");
     let medicamentoModificar = {
            "ID_MEDICAMENTO":req.body.id,
            "NOMBRE_MEDICAMENTO":req.body.nombre,
            "CANTIDAD_DISPONIBLE":req.body.cantidad,
            "LABORATORIO":req.body.laboratorio
        };    
       mediRepo.persist(medicamentoModificar).then(() => {
            res.json({ok:true});
        }).catch(e => {
            res.status(500).end(require('util').inspect(e));
        });
 

    });
    
    //ruta laboratorios
    app.get('/laboratorios',(req,res)=>{
        let labRepo = connection.getRepository("laboratorio");
        //obtenemos una lista de medicamentos
        labRepo.find().then(r => {
            res.json(r);
        }).catch(e => {
            res.status(500).end(require('util').inspect(e));
        });
    });
};
