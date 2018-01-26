"use strict";
var NameAndWeather_1 = require("./modules/NameAndWeather");
var DuplicateName_1 = require("./modules/DuplicateName");
require("./modules/withoutModules");
var tempConverter_1 = require("./tempConverter");
var name = new NameAndWeather_1.Name("Adam", "Freeman");
var loc = new NameAndWeather_1.WeatherLocation("raining", "London");
var other = new DuplicateName_1.Name();
//let cTemp = TempConverter.convertFtoC("38");
var cTemp = tempConverter_1.TempConverter.convertFtoC(38);
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
