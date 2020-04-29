const contacts = [
    {
        name: 'Tom',
        phoneNumber: 533-433-34 
    },
    {
        name: 'Bob',
        phoneNumber: 43-43432-43 
    },
    {
        name: 'David',
        phoneNumber: 435-4325-43256
    },
    {
        name: 'Smith',
        phoneNumber: 6243-768-32
    },
    {
        name: 'Sem',
        phoneNumber: 432867-534
    },
    {
        name: 'Sara',
        phoneNumber: 87654356-654
    },
]

const sortContacts = (contacts, bool = true) => {
    if(!Array.isArray(contacts)){
        return null
    }
    let result = contacts.sort((a, b) => {
        return a.name.localeCompare(b.name)
    });
    if(bool == false){
        result = contacts.sort((a, b) => {
            return b.name.localeCompare(a.name)
        }); 
    }
     return result;
}
const result1 = sortContacts(contacts, false)
// console.log(result1)