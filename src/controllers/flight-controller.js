const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            filghtNumber: req.body.filghtNumber,
            airplaneId: req.body.airplaneId, 
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime, 
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully create a flight',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able create a flight',
            err: error
        })
    }
} 

const getAll = async (req, res) => {
    try {
        const response = await flightService.getFlightData(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fatche the flight",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able fatch a flight',
            err: error
        })
    }
}

const get = async (req, res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fatch the flight",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able fatch a flight',
            err: error
        })
    }
}

const update = async (req, res) => {
    try {
        const response = await flightService.updateFlight(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully update the flight",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able update a flight',
            err: error
        })
    }
}


module.exports = {
    create,
    getAll,
    get,
    update
}