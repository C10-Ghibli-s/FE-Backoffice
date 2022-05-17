
export type Types_SessionForm = {
    name: string;
    password: string;
}

export type Types_ActiveSession = {
    user: {
        nickname: string;
        role: string;
    }
    access_token: string;
}