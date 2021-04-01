const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(num => num * 3);

newArr.forEach(num => {
    if (num % 2 === 0)
        console.log(num);
})