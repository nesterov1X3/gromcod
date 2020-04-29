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

const sortContacts = contacts => {
    if(!Array.isArray(contacts)){
        return null
    }
     const result = contacts.sort((a, b) => {
         return a.name.localeCompare(b.name)
     });
     return result;
}
const result = sortContacts(contacts)
// console.log(result)