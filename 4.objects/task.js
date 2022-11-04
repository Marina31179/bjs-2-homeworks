function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}
Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;

}
Student.prototype.addMark = function(marks) {
    if (this.marks === undefined) {
        this.marks = [marks];
    } else {
        this.marks.push(marks);
    }
}
Student.prototype.addMarks = function(...marks) {
    if (this.marks === undefined) {
        this.marks = [marks];
    } else {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function() {
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
        sum += Number(this.marks[i]);
    }
    let avg = sum / this.marks.length;
    return avg;
}

Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.reason = reason;
}
