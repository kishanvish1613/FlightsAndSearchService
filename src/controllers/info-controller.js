const info = async (req, res) => {
    try {
        return res.status(200).json({
            message: 'Inside flight and search service',
            success: true,
            err: {}
        })        
    } catch (error) {
        return res.status(404).json({
            success : false,
            err: error
        })
    }
}

module.exports = {
    info
}