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

const sortContacts = (contacts, bool) => {
    if(!Array.isArray(contacts)){
        return null
    }
    if(bool == true){
     const result = contacts.sort((a, b) => {
         return a.name.localeCompare(b.name)
     });
    }else(bool == false)
        const result = contacts.sort((a, b) => {
        return b.name.localeCompare(a.name)
    });
    
     return result;
}
const result = sortContacts(contacts, false)
console.log(result)