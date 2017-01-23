const Post = require("../models/usuario");
const Category = require("../models/rol");

module.exports = {
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
            target: "rol",
            type: "many-to-one",
            joinTable: true,
            cascadeInsert: true
        }
    }
    
};
