const CrudRepositroy = require('./crud-repository');
const {Airport} = require('../models/index');

class AirportRespository extends CrudRepositroy {
    constructor(){
        super(Airport);
    }
}

module.exports = AirportRespository;