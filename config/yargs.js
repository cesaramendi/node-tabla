const argv = require('yargs')
				.options({
					"b": {
						alias: "base",
						type: "number",
						demandOption: true,
						describe: 'Es el numero de la base a multiplicar'
						},
					"h": {
						alias: "hasta",
						type: "number",
						default: 10,
						describe: 'Numero de numeros a multiplicar'
					},
					"l": {
						alias: "listar",
						type: "boolean",
						default: false,
						describe: 'Lista la tabla por consola'
					},
				})
				.check((argv, options)=>{
					if(isNaN(argv.base)){
						throw new Error('La base tiene que ser un numero')
					}
					if(isNaN(argv.hasta)){
						throw new Error('La limite tiene que ser un numero')
					}
					return true
				})
				.argv;

module.exports = argv;