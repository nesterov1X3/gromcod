//algo
//input: arr
//output: obj
//create obj, ket- mounth, value-arr
//sort arr for day of mounth
//must stay  only name

// 1. Create function getStudentsBirthDays
// 2. input: [{ name: 'Tom', birthDate: '01/15/2010' }, { name: 'Ben', birthDate: '01/17/2008' }, { name: 'Sam', birthDate: '03/15/2010' }]
//    output: { Jan: ['Tom', 'Ben'], Mar: ['Sam'] }
// 3. Detect month of birth and group
// 4. Sort students inside the month
// 5. Leave only names

const students = [{ name: 'Tom', birthDate: '01/15/2010' },
{ name: 'Ben', birthDate: '01/17/2008' },
{ name: 'Sam', birthDate: '03/15/2010' }]

export function studentsBirthDays(students) {
     let monStud = ['Jan', 'Feb', 'Mar']
    const studentsObj = students.reduce((acc, student) => {
     //     console.log(student);
         const monthNumber = new Date(student.birthDate).getMonth()
         const montName = monStud[monthNumber];
         const oldStudents = acc[montName] ? acc[montName] : []
         return {...acc, [montName] : oldStudents.concat(student)}
     //     console.log(montName);
     
    }, {});
    for (let month in studentsObj) {
     const sortedStudents = studentsObj[month].sort((a, b) => {
         return (
             new Date(a.birthDate).getDate() -
             new Date(b.birthDate).getDate()
         );
     });
     const studentsNames = sortedStudents.map((student) => student.name);
     studentsObj[month] = studentsNames;
 }


    return studentsObj






     // const studSpl = copStud.map(item => 
     //      item.birthDate.split('/'))
     // console.log(studSpl);
     
     // const studentByMounth = Object.assign({}, { 'Jan': students.
     // filter(item => item)
     // }, { 'Mar': students })
     // console.log(studentByMounth)
     ;}
const result =  studentsBirthDays(students)
console.log(result);
