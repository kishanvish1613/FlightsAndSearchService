const {CityService} = require('../services/index');

const cityService = new CityService();
console.log("4");

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            massage: 'Successfully created a city',
            err: {} 
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            massage: 'not able to create a city',
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const reponse = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: reponse,
            success: true,
            massage: 'Successfully deleted a city',
            err: {} 
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            massage: 'not able to delete the city',
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const reponse = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: reponse,
            success: true,
            massage: 'Successfully fatched a city',
            err: {} 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            massage: 'not able to get a city',
            err: error
        });
    }
}

const update = async  (req, res) => {
    try {
        const reponse = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: reponse,
            success: true,
            massage: 'Successfully fatched a city',
            err: {} 
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            massage: 'not able to update the city',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            massage: 'Successfully fatched the cities',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            massage: 'Not able to fatch the cities',
            err: error
        })
    }
}
module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}