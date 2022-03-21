class Person
{
    constructor(first,middle,last)
    {
        this.first = first;
        this.middle = middle;
        this.last = last;
    }
    
}

var per1 = new Person("Himanshu");
per1.middle = "Satyendraprasad";
per1.last = "Singh"
document.write(per1.first + " " + per1.middle + " " + per1.last);