
function scan(sArr)
{
    out = [];

    for (x in sArr)
    {
        if (sArr[x] == "contraband")
        {
            
            out.push(Number(x));
        }
    }

    return out;
}

scan(['contraband', 'apples', 'cats', 'contraband', 'contraband']);