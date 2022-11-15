class Materializer
{
    constructor(s)
    {
        this.target = s;
        this.activated = false;
    }

    activate()
    {
        this.activated = true;
    }

    materialize()
    {
        if (this.activated == true)
        {
            return this.target;
        }
        else
        {
            return undefined;
        }
    }
}