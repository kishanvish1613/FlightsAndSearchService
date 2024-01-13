const {Airplane} = require('../models/index');

class AirplaneRepository {
    async getAirplane(id){
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("someting went wrong in Air repository layer");
            throw {error}
        }
    }
}

module.exports = AirplaneRepository;