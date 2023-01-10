export interface UsersList {
    email: string,
    picture: Picture,
    name: Name,
    dob: Dob,
    login: Login
}


interface Picture {
    large: string,
    medium: string,
    thumbnail: string
}

interface Name {
    first: string,
    last: string,
    title: string
}

interface Dob {
    age: number
}

interface Login {
    username: string
}