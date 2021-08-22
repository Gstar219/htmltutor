"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// let message='Hello world'
// console.log(message)
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    var sum = num1 + num2;
    //console.log(sum);
}
add(5);
//any declearation
var anytype;
anytype = 'jega';
anytype = 10;
anytype = true;
console.log(anytype);
function Name(person) {
    console.log(person.Firstname + " " + person.lastname);
}
var p = {
    lastname: 'Jega',
    Firstname: 'Samuel'
};
Name(p);
//Assigning value
/* function Name(person:{lastname:string, Firstname:string}) {
    console.log(`${person.Firstname} ${person.lastname}`)
}
let p= {
    lastname :'Jega',
    Firstname:'Samuel'
}

Name(p); */
//class
var employe = /** @class */ (function () {
    function employe(name) {
        this.employee = name;
    }
    employe.prototype.greet = function () {
        console.log("Welcome " + this.employee);
    };
    return employe;
}());
var emp1 = new employe('Jega');
console.log(emp1.employee);
emp1.greet();
//inheritance
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(managername) {
        return _super.call(this, managername) || this;
    }
    manager.prototype.work = function () {
        console.log("Manager Assigning Duties ");
    };
    return manager;
}(employe));
var man1 = new manager('Jega');
man1.greet();
man1.work();
console.log(man1.employee);
