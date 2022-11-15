function getFirstAmountSorted(sArr, n)
{
    if (sArr.length == 0)
    {
        return sArr;
    }
    return sArr.sort().slice(0, n);
}