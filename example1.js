const createOrder = (orderNum, orderID, name, address) => ({
    orderNum, orderID, name, address

});

const a = createOrder(orderNum = "20210401", oderID = "efubFront", name = "efub", address = "서울특별시 서대문구 이화여대길 52");
const b = createOrder(orderNum = "20210402", oderID = "efubBack", name = "efub2", address = "서울특별시 서대문구 이화여대길 53");

for (let order in a) {
    console.log(`${order}:${a[order]}`);
}

for (let order in b) {
    console.log(`${order}:${b[order]}`);
}
