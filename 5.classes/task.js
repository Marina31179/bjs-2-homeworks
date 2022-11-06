class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        console.log(1.5*this.state);
    }
    set state(value) {
        if (value < 0) {
            this.state = 0;
        }
        if (value > 100) {
            this.state = 100;
        }

    }
    get state() {
        console.log(this.state);
    }
}
class Magazine extends PrintEditionItem {
    constructor(name) {
        super(name);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(name) {
        super(name);
        this.type = "book";
    }
}
class NovelBook extends Book {
    constructor(name) {
        super(name);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(name) {
        super(name);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(name) {
        super(name);
        this.type = "detective";
    }
}
