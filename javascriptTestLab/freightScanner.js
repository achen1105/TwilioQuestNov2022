function scan(sArr)
{
    count = 0;

    for (x of sArr)
    {
        if (x == "contraband")
        {
            count++;
        }
    }

    return count;
}