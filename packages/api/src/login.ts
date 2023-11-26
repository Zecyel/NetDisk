export type LoginRequest = {
    username: string,
    password: string
}

export type LoginResponse = {
    status: 200 | 400
    message: string
}
