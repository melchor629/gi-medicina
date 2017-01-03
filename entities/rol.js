const Post = require("../models/rol");

const RolSchema = {
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

module.exports = {
    RolSchema: RolSchema
};
