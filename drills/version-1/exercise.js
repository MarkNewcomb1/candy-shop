function candySalesToObject(arr) {
    var result = arr.reduce(function(acc) {
        acc.item = arr[0];
        acc.price = arr[1];
        acc.quantity = arr[2];
        return acc;
    }, {});
    return result;
}

function salesDayToObject(dateAsString, obj) {
    var result = obj[dateAsString].reduce(function(o, d) {
        o.sales.push(candySalesToObject(d));
        return o;
    }, {date: dateAsString, sales: []});
    return result;
}

function allSalesToArray(obj) {
    var result = Object.keys(obj).map(function(date) {
        return salesDayToObject(date, obj);
    })
    return result;
}
module.exports = {
    // Uncomment these functions as you write them
    candySalesToObject,
    salesDayToObject,
    allSalesToArray
};
