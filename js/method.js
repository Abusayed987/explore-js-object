// p:01
const student = {
    name: 'kodom ali',
    money: 5000,
    subject: ['math', 'english', 'bangla'],
    exam: function () {
        return this.name + 'is participating in an Exam ';
    },
}
// console.log(student.exam());
// p:02
const student2 = {
    name: 'akkas ali',
    age: 20,
    reExam: function (subject) {
        return `${this.name} reExam dese    ${subject}`
    }
}
console.log(student2.reExam('bangla'));
// p:03
const student3 = {
    name: 'kuddus mia',
    age: 25,
    money: 250000,
    tritDay: function (budgetMoney) {
        return(this.money - budgetMoney)
    }
}
const moneyRemaining = student3.tritDay(10000);
console.log(moneyRemaining);
// p:04
const student4 ={
    name:'dola mia',
    age:18,
    Earning : 10000,
    dola : function (khoros) {
        return (this.Earning - khoros)
    }
}
const earningRemaining = student4.dola(500);
console.log(earningRemaining);
// p:05
const student5 = {
    name : 'kodo mia',
    age :40 ,
    monthlyIncome : 3500000,
    monthlykhoros : function (totalExpence) {
        return (this.monthlyIncome - totalExpence)
    }

}
const monthlyRemaining = student5.monthlykhoros(1500000);
console.log(monthlyRemaining);