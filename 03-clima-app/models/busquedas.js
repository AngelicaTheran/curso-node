const axios = require('axios');



class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'Bogotá'];

    constructor() {

    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'languege': 'es'
        }
    }

    async ciudad(lugar = '') {
        try {
           
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();
            console.log(resp.data);

            return []

        } catch (error) {
            return [];
        }



    }

}






module.exports = Busquedas;