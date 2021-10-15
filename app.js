const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();

console.log(argv.base, argv.limite, argv.listar);

crearArchivo(argv.base, argv.hasta, argv.listar)
	.then( nombreArchivo => console.log(nombreArchivo, 'creado') )
	.catch( err => console.log(err) );