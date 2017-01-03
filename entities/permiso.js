const Post = require("../models/permiso");
const RolCategory = require("../models/rol");
const PantallaCategory = require("../models/pantalla");

const PermisoSchema = {
    target: Post,
    columns: {
        acceso: {
            
            type: "int",
        },
        modificacion: {
            type: "int"
        },
        
    },

    relations: {
        rolName: {
            target: RolCategory,
            type: "one-to-many",
            joinTable: true,
            cascadeInsert: true,
            primary: true
        },
   
        pantalla: {
            target: PantallaCategory,
            type: "one-to-many",
            joinTable: true,
            cascadeInsert: true,
            primary: true 
    }
}
    
};

module.exports = {
    PermisoSchema: PermisoSchema
};
