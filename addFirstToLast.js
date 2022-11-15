function addFirstToLast(s)
{
    if (s.length == 0)
    {
        return "";
    }
    return s[0]+s[s.length-1];
}