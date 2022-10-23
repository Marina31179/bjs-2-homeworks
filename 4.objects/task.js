let Student = function(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject =  function(subjectName) {
    if (Student.subject === undefined) {
        this.subjectName = Student.subject;
    }
}
Student.prototype.addMark = function(mark) {
    if (this.mark === undefined) {
        this.mark = [mark];
    } else {
        this.mark.push(mark);
    }
}
Student.prototype.addMarks = function(...marks) {
    this.marks.push[marks];
}


Student.prototype.getAverage = function() {
    let sum = 0;
    let num;
    for (let i = 0; i < [marks].length; i++) {
        num = Number(marks[i]);
        sum += num[i];
        avg = sum / [marks].length;
    }
}

Student.prototype.exclude = function(reason) {
    if (avg < 3) {
        delete subject;
        delete [marks];
        Student.excluded = reason;
        return reason;
    }
}