const inventory = []

module.exports = {
    getInventory: (req, res, next) => { 
        const db = req.app.get('db')
        db.get_inventory().then(products => { 
            res.status(200).send(products)
        })    
    },
    addProduct: (req, res, next) => { 
        const { name, URL, price } = req.body
        const db = req.app.get('db')
        db.add_to_inventory([name, URL, price])
            .then(products => { 
                res.status(200).send(products)
            })
    },
    deleteProduct: (req, res) => {
        const { id } = req.params;
        const db = req.app.get('db')
        db.remove_from_inventory(id)
            .then(products => { 
                res.status(200).send(products)
            })
    }
}