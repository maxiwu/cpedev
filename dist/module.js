(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _marked = [letsTalk].map(regeneratorRuntime.mark);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//require("babel-polyfill");
//import "babelify/polyfill";

var sum = function sum(a) {
    var b = arguments.length <= 1 || arguments[1] === undefined ? 6 : arguments[1];
    return a + b;
};

var square = function square(b) {
    return b * b;
};

var variable = 8;

var MyClass = (function () {
    function MyClass(credentials) {
        _classCallCheck(this, MyClass);

        this.name = credentials.name;
        this.enrollmentNo = credentials.enrollmentNo;
    }

    _createClass(MyClass, [{
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }]);

    return MyClass;
})();

exports.sum = sum;
exports.square = square;
exports.variable = variable;
exports.MyClass = MyClass;

//test ES6 generators

function letsTalk() {
    var x;
    return regeneratorRuntime.wrap(function letsTalk$(_context) {
        while (1) switch (_context.prev = _context.next) {
            case 0:
                _context.next = 2;
                return "I am ES6 generator.";

            case 2:
                _context.t0 = _context.sent;
                x = _context.t0 + "WAT";

                console.log(x);

            case 5:
            case "end":
                return _context.stop();
        }
    }, _marked[0], this);
}

var gen = letsTalk();
console.log(gen.next());
var endOfGen = gen.next("wait ");
if (endOfGen.done) {
    console.log("ES6 generator is done");
}

},{}],2:[function(require,module,exports){
'use strict';

var _import = require('./import');

// 25
console.log((0, _import.square)(5));

var cred = {
    name: 'Ritesh Kumar',
    enrollmentNo: 11115078
};

var x = new _import.MyClass(cred);

//Ritesh Kumar
console.log();
alert("ES6 function: " + x.getName());

},{"./import":1}]},{},[2,1]);
