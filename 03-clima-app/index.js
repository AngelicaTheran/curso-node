require('dotenv').config()

const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");



const main = async () => {

    const busquedas = new Busquedas();

    let opt;

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:

                const termino = await leerInput('Ciudad:');

                const lugares = await busquedas.ciudad(termino);

                const idSeleccionado = await listarLugares(lugares);
                if ( idSeleccionado === '0') continue;

                const lugarSel = lugares.find(l => l.id === idSeleccionado);
                
                busquedas.agregarHistorial(lugarSel.nombre);

                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);



                console.clear();
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad', lugarSel.nombre.green);
                console.log('Lat:', lugarSel.lat);
                console.log('Lng:', lugarSel.lng);
                console.log('Temperatura', clima.temp);
                console.log('Minima:', clima.min);
                console.log('Maxima:', clima.max);
                console.log('Descripcion:', clima.desc.green);

                break;

            case 2:
                
                busquedas.historial.forEach((lugar, index) => {
                    const indx = `${index + 1}.`.green;
                    console.log(`${ indx } ${ lugar }`);

                })

                break;


        }

        if (opt !== 0) await pausa();

    } while (opt !== 0);







}



main();