const Crudservice = require('./crud-service');
const {AirportRespository} = require('../repository/index');

class AirportService extends Crudservice {
    constructor(){
        const airportRespository = new AirportRespository();
        super(airportRespository);
    }
}

module.exports = AirportService;