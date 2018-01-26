"use strict";
var TempConverter = (function () {
    function TempConverter() {
    }
    //static convertFtoC(temp) {
    TempConverter.convertFtoC = function (temp) {
        return ((parseFloat(temp.toPrecision(2)) - 32) / 1.8).toFixed(1);
        //return (parseFloat(temp.toPrecision(2)) - 32) / 1.8;
    };
    return TempConverter;
}());
exports.TempConverter = TempConverter;
