import { Name, WeatherLocation } from "./modules/NameAndWeather";
import { Name as OtherName } from "./modules/DuplicateName";
import "./modules/withoutModules";
import { TempConverter } from "./tempConverter";

let name = new Name("Adam", "Freeman");
let loc = new WeatherLocation("raining", "London");
let other = new OtherName();
//let cTemp = TempConverter.convertFtoC("38");
let cTemp = TempConverter.convertFtoC(38);

console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(other.message);

console.log("customVar is: " + customVar);


/*class MyClass {
    constructor(name, weather) {
        this.name = name;
        this._weather = weather;
    }

    set weather(value) {
        this._weather = value;
    }
    
    get weather() {
        return `Today is ${this._weather}`;
    }

    printMessages() {
        console.log("Hello " + this.name + ". ");
        console.log("Today is " + this.weather + ".");
    }
}

class MySubClass extends MyClass {
    constructor(name, weather, city) {
        super(name, weather);
        this.city = city;
    }
    printMessages() {
        super.printMessages();
        console.log(`You are in ${this.city}`);
    }
}

//let myData = new MyClass("Adam", "sunny");

let myData = new MySubClass("Adam", "sunny", "London");
myData.printMessages();*/
