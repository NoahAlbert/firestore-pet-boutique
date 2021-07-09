//connect to firestore
const admin = require('firebase-admin')
const credentials = require('./credentials.json')

admin.initializeApp({
    credential: admin.credential.cert(credentials)
})

const db = admin.firestore()

/*
//create a customer
const newCustomer = {
    firstName: 'Noah',
    lastName: 'Albert',
    phone: '561-413-7707',
    email: 'no.albert113@gmail.com',
    dob: '2003-11-03',
    pets: [{
        name: 'ryder',
        type: 'dog',
        size: 'medium',
        age: 2
    }, {
        name: 'dragon',
        type: 'salamander',
        size: 'small',
        age: 9
    }]
}

db.collection('customers').add(newCustomer)
    .then(doc => console.log('Added New Customer', doc.id))
    .catch(err => console.error('Error Adding Customer:', err))
*/

//get all customers
db.collection('customers').get()
    .then(collection => {
        //console.log the results
        const allCustomers = collection.docs.map(doc => doc.data())
        console.log(allCustomers)
        console.log(allCustomers[1].pets[0].name)
    })    
    .catch(err => console.error('Error Getting Customers:', err))