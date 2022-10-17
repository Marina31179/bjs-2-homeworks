let Student = function(name, gender, age, subject) {
    this.name = name;
    this.gender = (gender != 'female') ? 'male' : 'femail';
    this.age = age;
    this.subject = subject;
    Student.prototype.setSubject = function (subjectName) {
        subject = subjectName;
        return subject;//ваш код
    }

    Student.prototype.addMark = function(mark) {
        if (this.marks === undefined) {
            this.marks = [mark]; // добавить первую оценку
        } else {
            this.marks.push(mark);

        }
    }
    Student.prototype.addMarks(mark) = function() {
        [marks].push(mark);
        return [marks];
    }

    Student.prototype.getAverage(avg) = function() {
        let sum = 0;
        for (let i = 0; i < [mark].length; i++) {
            sum += marks[i];
        }
        let avg = sum / [marks].length;
        return { avg: avg };

    }
    console.log('age: ' + 'gender: ' + 'marks: ' + 'name: ' + 'subject: ');



}
