console.log();

function getTotalItemSales(sales, itemID) {
    return sales.filter(function(sale) {
        return sale.itemId == itemID;
    }).reduce(function(acc, sale) {
        return acc += sale.quantity;
    }, 0)
}

function addTotalSalesToItems(sales, items) {
    return items.map(function(item){
        item.quantity = getTotalItemSales(sales, item.id);
        return item;
    });
}

function addTotalValueToItems(sales, items) {
    return addTotalSalesToItems(sales, items).map(function(item) {
        item.totalValue = (item.quantity * item.price).toFixed(2);
        return item;
    })
}
module.exports = {
    // Uncomment these functions as you write them
    getTotalItemSales,
    addTotalSalesToItems,
    addTotalValueToItems
}
