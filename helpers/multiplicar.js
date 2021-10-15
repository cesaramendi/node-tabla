const fs = require('fs');

const crearArchivo = async(base=5, n=10, listar) => {
	try{
		

		let tabla = "";
		for(let i=1; i<= n; i++){
			tabla+=`${ base } x ${ i } = ${ base*i }\n`
		}

		if(listar){
			console.log("=================");
			console.log("    Tabla del:", base);
			console.log("=================");
			console.log(tabla);
		} 

		fs.writeFileSync(`./salida/tabla-${ base }.txt`, tabla);

		return(`tabla-${ base }.txt`);
		
	}catch(err){
		throw err;
	}
	
}

module.exports = {
	crearArchivo
}