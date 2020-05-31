//algo
//input: arr
//output: -
//create obj, ket- mounth, value-arr
//sort arr for day of mounth
//must stay  only name
const students = [{ name: 'Tom', birthDate: '01/15/2010' },
{ name: 'Ben', birthDate: '01/17/2008' },
{ name: 'Sam', birthDate: '03/15/2010' }]

export function studentsBirthDays(students) {
     let copStud = [...students]
    
     // const studSpl = copStud.map(item => 
     //      item.birthDate.split('/'))
     // console.log(studSpl);
     
     const studentByMounth = Object.assign({}, { 'Jan': students.
     filter(item => item)
     }, { 'Mar': students })
     // console.log(studentByMounth)
     ;}
// studentsBirthDays(students)