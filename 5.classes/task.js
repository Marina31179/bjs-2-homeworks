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

class Library {
    push;
    constructor(name) {
        this._name = name;
        this._books = [];
    }

    addBook(book, state) {
        this._book = book;
        this._book.state = state;
        if (this._book.state > 30) {
            this._books = this.push.this._book;
        }
    }

    findBookBy(type) {
        this._type = type;
        let book = {author, releaseDate, pagesCount};
        this._book = book;
        if (this._type === this.type && this._book === this.value) {
            return book}
        else {
            return null;
        }
    }


    giveBookByName(bookName) {
        if (this._bookName === bookName) {
            delete this._bookName
        }
        else {
            return null;
        }
    }
}


