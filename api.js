const axios = require('axios');

const createUser = (name, password, email) => {
    /*
    createUserApi
    Args: name, password, email
    Returns: Nothing/undefined
    */
    const request = {name, password, email};
    axios.post('http://localhost:3001/api/users/', request, {proxy: {
        host: '127.0.0.1',
        port: 3001
    }})
    .then(_ => console.log('user succesfully created for joes!'))
    .catch(error => console.error('Error creating user!'))
}


const getInventoryByName = (name) => {
    /*
    getInventoryByNameApi
    Args: item name (string)
    Returns: Inventory amount of item
    */
    axios.get(`http://localhost:3001/api/inventory/${name}`, {proxy: {
        host: '127.0.0.1',
        port: 3001
    }})
    .then(response => console.log(`Item: ${name} has quantity ${response}`))
    .catch(error => console.error('Error finding item in inventory!'))
}


module.exports = {createUser, getInventoryByName}