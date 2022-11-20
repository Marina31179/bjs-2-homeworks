class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this._state * 1.5;
        return this.state;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        }
        if (value > 100) {
            this._state = 100;
        }
        else {
            this._state = value;

        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this._books = [];
    }

    addBook() {
        if (this.book.state > 30) {
            this.books = push.book;
        }
    }
    findBookBy(type, author, releaseDate) {
        this.type = type;
        this.author = author;
        this.releaseDate = releaseDate;
        if (this.book.value >= 1) {
            return this.book;
        }
        else {
            return null;
        }
    }

    giveBookByName(bookName) {
        this.bookName = bookName;
        if (this.bookName === bookName) {
            delete this.book;
        }
        else {
            return null;
        }
    }

}

