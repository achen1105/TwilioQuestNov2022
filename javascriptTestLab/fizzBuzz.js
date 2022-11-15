if (process.argv[2] % 3 == 0 && process.argv[2] % 5 == 0)
{
    console.log("JavaScript");
}
else if (process.argv[2] % 3 == 0)
{
    console.log("Java");
}
else if (process.argv[2] % 5 == 0)
{
    console.log("Script");
}
else
{
    console.log(process.argv[2]);
}