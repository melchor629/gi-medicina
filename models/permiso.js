class Permiso{

    constructor(rolName, pantalla,acceso,modificacion){
        this.rolName=rolName;
        this.pantalla=pantalla;
	this.acceso=acceso;
	this.modificacion=modificacion;   
    }
    
}

module.exports.Permiso=Permiso;
