function calculatePower(numArr)
{
    res = numArr.map(item => item*2);
    return res.reduce((prod, item) => prod + item, 0);
}

console.log(calculatePower([1,2,3]));