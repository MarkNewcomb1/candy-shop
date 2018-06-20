function getItemById(list, itemId) {
    return list.filter(function(item){
        return item.id == itemId;
    })[0];
}

function buildTransactions(sales, items) {
    return sales.map(function(obj) {
        return Object.assign(obj, getItemById(items, obj.itemId));
    }).map(function(obj) {
        delete obj.id;
        return obj;
    })
}

function getTransactionsByItemDescription(trans, descrip) {
    return trans.filter(function(item){
        return item.description === descrip;
    })
}
module.exports = {
    // Uncomment these as you write them
    getItemById,
    buildTransactions,
    getTransactionsByItemDescription
}
