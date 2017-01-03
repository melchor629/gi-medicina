const Post = require("../models/usuario");
const Category = require("../models/rol");

const UsuarioSchema = {
    target: Post,
    columns: {
        nombre: {
            primary: true,
            type: "string",
        },
        password: {
            type: "string"
        }
      },
       relations: {
        rolName: {
            target: Category,
            type: "one-to-many",
            joinTable: true,
            cascadeInsert: true
        }
    }
    
};

module.exports = {
    UsuarioSchema: UsuarioSchema
};
