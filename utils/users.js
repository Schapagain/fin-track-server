const getCleanUsers = users => {
    if (!Array.isArray(users)) users = [users]

    return users.map( user => {
        let {name,email} = user;
            return {name,email}
    })
}
module.exports = {getCleanUsers}