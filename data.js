const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
}

module.exports = {
    ROLE: ROLE,
    users: [
        {id: 1, name: 'Luan', role: ROLE.ADMIN},
        {id: 2, name: 'Pedro', role: ROLE.BASIC},
        {id: 3, name: 'Gustavo', role: ROLE.BASIC}
    ],
    project: [
        {id: 1, name: "Luan's Project", userId: 1},
        {id: 2, name: "Pedro's Project", userId: 2},
        {id: 3, name: "Gustavo's Project", userId: 3}
    ]
}