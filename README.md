### Joe's Breakfast Cart (Backend)

#### How to use the api
1) start  `node`
2) import in api library. `const joesApi = require(./api)`
3) call the api with  `joesApi.nameOfFunction` i.e  `joesApi.createUser('Joseph', 'password', 'joe@email.com')`

#### Api documentation
createUser(name, password, email) 
    Args: name(string), password(string), email(string)
    Returns: Nothing/undefined

getInventoryByName (name)
    Args: item's name (string)
    Returns: Inventory amount of item

makeTransaction(userId, orders)
    Args: userId(int), orders(object): {eggs: 3, bacon:4}
    Returns Nothing/undefined
    
 ###incomplete at the moment
