function scanAndFilter(sArr, text)
{
    return sArr.filter(item => item != text);
}

console.log(scanAndFilter(['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'], 'ray guns'));