abstract class Figure {
    figureType: string;
    figureName: string;
    figureX: number;
    figureY: number;

    constructor(figureType: string, figureName: string, figureX: number, figureY: number) { 
        this.figureType = figureType;
        this.figureName = figureName;
        this.figureX = figureX;
        this.figureY = figureY;
    }

    abstract calcArea(): number;
    abstract calcPerimetr(): number;  

}

class Rectangle extends Figure { 

    constructor(figureType: string, figureName: string, figureX: number, figureY: number, private width: number, private height: number) {
        super(figureType, figureName, figureX, figureY);
    }

    calcArea(): number {
        return this.height * this.width;    
    }

    calcPerimetr(): number{
        return (this.height + this.width) * 2;
    }

    printTest(): void {
        console.log(`
            тип фигуры: ${this.figureType}
            имя фигуры: ${this.figureName}
            координата Х: ${this.figureX}
            координата Y: ${this.figureY}
            высота: ${this.height}
            ширина: ${this.width}
            площадь: ${this.calcArea()}
            периметр: ${this.calcPerimetr()};
        `);    
    }

     saveToLocalStorage(): void { 
         let storeObj = {
             'type': this.figureType,
             'name': this.figureName,
             'X': this.figureX,
             'Y': this.figureY,
             'H': this.height,
             'W': this.width,
             'S': this.calcArea(),
             'P': this.calcPerimetr()
         };
         let figuresCollection = localStorage.getItem('figuresCollection');
         let figures: any[] = [];
         if (figuresCollection && figuresCollection.length > 0) {
             figures = figures.concat(JSON.parse(figuresCollection));
         }
         figures.push(storeObj);
         localStorage.setItem('figuresCollection', JSON.stringify(figures));
        
    }
   
}

class Circle extends Figure { 

    constructor(figureType: string, figureName: string, figureX: number, figureY: number, private radius: number) {
        super(figureType, figureName, figureX, figureY);
    }

    calcArea(): number {
        return this.radius * this.radius * Math.PI;
    }

    calcPerimetr(): number{
        return 2 * this.radius * Math.PI;
    }

    printTest(): void {
        console.log(`
            тип фигуры: ${this.figureType}
            имя фигуры: ${this.figureName}
            координата Х: ${this.figureX}
            координата Y: ${this.figureY}
            радиус: ${this.radius}
            площадь: ${this.calcArea()}
            периметр: ${this.calcPerimetr()};
        `);    
    }

     saveToLocalStorage(): void { 
         let storeObj = {
             'type': this.figureType,
             'name': this.figureName,
             'X': this.figureX,
             'Y': this.figureY,
             'R': this.radius,
             'S': this.calcArea(),
             'P': this.calcPerimetr()
         };
         let figuresCollection = localStorage.getItem('figuresCollection');
         let figures: any[] = [];
         if (figuresCollection && figuresCollection.length > 0) {
             figures = figures.concat(JSON.parse(figuresCollection));
         }
         figures.push(storeObj);
         localStorage.setItem('figuresCollection', JSON.stringify(figures));
        
    }
   
}

class Square extends Figure { 

    constructor(figureType: string, figureName: string, figureX: number, figureY: number, private width: number) {
        super(figureType, figureName, figureX, figureY);
    }

    calcArea(): number {
        return this.width * this.width;
    }

    calcPerimetr(): number{
        return this.width * 4;
    }

    printTest(): void {
        console.log(`
            тип фигуры: ${this.figureType}
            имя фигуры: ${this.figureName}
            координата Х: ${this.figureX}
            координата Y: ${this.figureY}
            радиус: ${this.width}
            площадь: ${this.calcArea()}
            периметр: ${this.calcPerimetr()};
        `);    
    }

     saveToLocalStorage(): void { 
         let storeObj = {
             'type': this.figureType,
             'name': this.figureName,
             'X': this.figureX,
             'Y': this.figureY,
             'W': this.width,
             'S': this.calcArea(),
             'P': this.calcPerimetr()
         };
         let figuresCollection = localStorage.getItem('figuresCollection');
         let figures: any[] = [];
         if (figuresCollection && figuresCollection.length > 0) {
             figures = figures.concat(JSON.parse(figuresCollection));
         }
         figures.push(storeObj);
         localStorage.setItem('figuresCollection', JSON.stringify(figures));
        
    }
   
}

class Triangle extends Figure { 

    constructor(figureType: string, figureName: string, figureX: number, figureY: number, private width: number) {
        super(figureType, figureName, figureX, figureY);
    }

    calcArea(): number {
        return Math.sqrt(3) / 4 * this.width * this.width;
    }

    calcPerimetr(): number{
        return this.width * 3;
    }

    printTest(): void {
        console.log(`
            тип фигуры: ${this.figureType}
            имя фигуры: ${this.figureName}
            координата Х: ${this.figureX}
            координата Y: ${this.figureY}
            радиус: ${this.width}
            площадь: ${this.calcArea()}
            периметр: ${this.calcPerimetr()};
        `);    
    }

     saveToLocalStorage(): void { 
         let storeObj = {
             'type': this.figureType,
             'name': this.figureName,
             'X': this.figureX,
             'Y': this.figureY,
             'W': this.width,
             'S': this.calcArea(),
             'P': this.calcPerimetr()
         };
         let figuresCollection = localStorage.getItem('figuresCollection');
         let figures: any[] = [];
         if (figuresCollection && figuresCollection.length > 0) {
             figures = figures.concat(JSON.parse(figuresCollection));
         }
         figures.push(storeObj);
         localStorage.setItem('figuresCollection', JSON.stringify(figures));
        
    }
   
}
