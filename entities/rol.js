const Post = require("../models/rol");

module.exports = {
    target: Post,
    columns: {
        rolName: {
            primary: true,
            type: "string",
        },
        rolDes: {
            type: "string"
        },
        admin: {
            type: "int"
        }
    }
    
};
