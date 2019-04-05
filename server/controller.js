const inventory = ['hello']

module.exports = {
    getInventory: (req, res, next) => { 
        res.status(200).send(inventory)
    }
}