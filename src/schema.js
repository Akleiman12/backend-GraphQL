export default `
    type Query{
        user(id: String): User,
        users: [User]
    }

    type User {
        id: Int,
        name: String,
    }
`