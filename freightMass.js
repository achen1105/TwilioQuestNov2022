function calculateMass(s)
{
    return s.reduce((sum, current) => sum + current.length, 0);
}