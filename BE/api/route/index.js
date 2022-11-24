module.exports = function (app)  {
    const ItemController = require ('../controller/index')
    app.route('/item').post(ItemController.addItem).get(ItemController.readExcel)
    app.route('/item/:id').delete(ItemController.deleteItem).put(ItemController.updateItem)
    app.route('/item/excel').post(ItemController.importExcel)
}