var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figure = (function () {
    function Figure(figureType, figureName, figureX, figureY) {
        this.figureType = figureType;
        this.figureName = figureName;
        this.figureX = figureX;
        this.figureY = figureY;
    }
    return Figure;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(figureType, figureName, figureX, figureY, width, height) {
        var _this = _super.call(this, figureType, figureName, figureX, figureY) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calcArea = function () {
        return this.height * this.width;
    };
    Rectangle.prototype.calcPerimetr = function () {
        return (this.height + this.width) * 2;
    };
    Rectangle.prototype.printTest = function () {
        console.log("\n            \u0442\u0438\u043F \u0444\u0438\u0433\u0443\u0440\u044B: " + this.figureType + "\n            \u0438\u043C\u044F \u0444\u0438\u0433\u0443\u0440\u044B: " + this.figureName + "\n            \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430 \u0425: " + this.figureX + "\n            \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430 Y: " + this.figureY + "\n            \u0432\u044B\u0441\u043E\u0442\u0430: " + this.height + "\n            \u0448\u0438\u0440\u0438\u043D\u0430: " + this.width + "\n            \u043F\u043B\u043E\u0449\u0430\u0434\u044C: " + this.calcArea() + "\n            \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440: " + this.calcPerimetr() + ";\n        ");
    };
    Rectangle.prototype.saveToLocalStorage = function () {
        var storeObj = {
            'type': this.figureType,
            'name': this.figureName,
            'X': this.figureX,
            'Y': this.figureY,
            'H': this.height,
            'W': this.width,
            'S': this.calcArea(),
            'P': this.calcPerimetr()
        };
        var figuresCollection = localStorage.getItem('figuresCollection');
        var figures = [];
        if (figuresCollection && figuresCollection.length > 0) {
            figures = figures.concat(JSON.parse(figuresCollection));
        }
        figures.push(storeObj);
        localStorage.setItem('figuresCollection', JSON.stringify(figures));
    };
    return Rectangle;
}(Figure));
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(figureType, figureName, figureX, figureY, radius) {
        var _this = _super.call(this, figureType, figureName, figureX, figureY) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calcArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.calcPerimetr = function () {
        return 2 * this.radius * Math.PI;
    };
    Circle.prototype.printTest = function () {
        console.log("\n            \u0442\u0438\u043F \u0444\u0438\u0433\u0443\u0440\u044B: " + this.figureType + "\n            \u0438\u043C\u044F \u0444\u0438\u0433\u0443\u0440\u044B: " + this.figureName + "\n            \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430 \u0425: " + this.figureX + "\n            \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430 Y: " + this.figureY + "\n            \u0440\u0430\u0434\u0438\u0443\u0441: " + this.radius + "\n            \u043F\u043B\u043E\u0449\u0430\u0434\u044C: " + this.calcArea() + "\n            \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440: " + this.calcPerimetr() + ";\n        ");
    };
    Circle.prototype.saveToLocalStorage = function () {
        var storeObj = {
            'type': this.figureType,
            'name': this.figureName,
            'X': this.figureX,
            'Y': this.figureY,
            'R': this.radius,
            'S': this.calcArea(),
            'P': this.calcPerimetr()
        };
        var figuresCollection = localStorage.getItem('figuresCollection');
        var figures = [];
        if (figuresCollection && figuresCollection.length > 0) {
            figures = figures.concat(JSON.parse(figuresCollection));
        }
        figures.push(storeObj);
        localStorage.setItem('figuresCollection', JSON.stringify(figures));
    };
    return Circle;
}(Figure));
var Square = (function (_super) {
    __extends(Square, _super);
    function Square(figureType, figureName, figureX, figureY, width) {
        var _this = _super.call(this, figureType, figureName, figureX, figureY) || this;
        _this.width = width;
        return _this;
    }
    Square.prototype.calcArea = function () {
        return this.width * this.width;
    };
    Square.prototype.calcPerimetr = function () {
        return this.width * 4;
    };
    Square.prototype.printTest = function () {
        console.log("\n            \u0442\u0438\u043F \u0444\u0438\u0433\u0443\u0440\u044B: " + this.figureType + "\n            \u0438\u043C\u044F \u0444\u0438\u0433\u0443\u0440\u044B: " + this.figureName + "\n            \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430 \u0425: " + this.figureX + "\n            \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430 Y: " + this.figureY + "\n            \u0440\u0430\u0434\u0438\u0443\u0441: " + this.width + "\n            \u043F\u043B\u043E\u0449\u0430\u0434\u044C: " + this.calcArea() + "\n            \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440: " + this.calcPerimetr() + ";\n        ");
    };
    Square.prototype.saveToLocalStorage = function () {
        var storeObj = {
            'type': this.figureType,
            'name': this.figureName,
            'X': this.figureX,
            'Y': this.figureY,
            'W': this.width,
            'S': this.calcArea(),
            'P': this.calcPerimetr()
        };
        var figuresCollection = localStorage.getItem('figuresCollection');
        var figures = [];
        if (figuresCollection && figuresCollection.length > 0) {
            figures = figures.concat(JSON.parse(figuresCollection));
        }
        figures.push(storeObj);
        localStorage.setItem('figuresCollection', JSON.stringify(figures));
    };
    return Square;
}(Figure));
var Triangle = (function (_super) {
    __extends(Triangle, _super);
    function Triangle(figureType, figureName, figureX, figureY, width) {
        var _this = _super.call(this, figureType, figureName, figureX, figureY) || this;
        _this.width = width;
        return _this;
    }
    Triangle.prototype.calcArea = function () {
        return Math.sqrt(3) / 4 * this.width * this.width;
    };
    Triangle.prototype.calcPerimetr = function () {
        return this.width * 3;
    };
    Triangle.prototype.printTest = function () {
        console.log("\n            \u0442\u0438\u043F \u0444\u0438\u0433\u0443\u0440\u044B: " + this.figureType + "\n            \u0438\u043C\u044F \u0444\u0438\u0433\u0443\u0440\u044B: " + this.figureName + "\n            \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430 \u0425: " + this.figureX + "\n            \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430 Y: " + this.figureY + "\n            \u0440\u0430\u0434\u0438\u0443\u0441: " + this.width + "\n            \u043F\u043B\u043E\u0449\u0430\u0434\u044C: " + this.calcArea() + "\n            \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440: " + this.calcPerimetr() + ";\n        ");
    };
    Triangle.prototype.saveToLocalStorage = function () {
        var storeObj = {
            'type': this.figureType,
            'name': this.figureName,
            'X': this.figureX,
            'Y': this.figureY,
            'W': this.width,
            'S': this.calcArea(),
            'P': this.calcPerimetr()
        };
        var figuresCollection = localStorage.getItem('figuresCollection');
        var figures = [];
        if (figuresCollection && figuresCollection.length > 0) {
            figures = figures.concat(JSON.parse(figuresCollection));
        }
        figures.push(storeObj);
        localStorage.setItem('figuresCollection', JSON.stringify(figures));
    };
    return Triangle;
}(Figure));

