class Ducktypium
{
    constructor(c)
    {
        if (c != "red" && c != "yellow" && c != "blue")
        {
            throw Error("not valid color");
        }
        
        this.color = c;
        this.calibrationSequence = [];
    }

    refract(newCol)
    {
        if (newCol != "red" && newCol != "yellow" && newCol != "blue")
        {
            throw Error("not valid color");
        }
        
        if ((this.color == "red" && newCol == "blue") || (this.color == "blue" && newCol == "red"))
        {
            return "purple";
        }
        else if ((this.color == "red" && newCol == "yellow") || (this.color == "yellow" && newCol == "red"))
        {
            return "orange";
        }
        else if ((this.color == "yellow" && newCol == "blue") || (this.color == "blue" && newCol == "yellow"))
        {
            return "green";
        }
        else
        {
            return this.color;
        }
        
    }

    calibrate(numArr)
    {
        this.calibrationSequence = numArr.sort().map(item => item*3);
    }
}

// Create a new instance of the class
const dt = new Ducktypium("red");

console.log(dt.color); // prints 'red'

console.log(dt.refract("blue")); // prints 'purple'
console.log(dt.refract("red")); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]