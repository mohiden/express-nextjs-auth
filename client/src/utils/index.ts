import axios from 'axios';

interface IUser {
    username: string;
    password: string;
}
interface CreateInput {
    username: string;
    password: string;
    passwordConfirmation: string;
    phoneNumber: string
}

export interface ITodo {
    _id: string;
    description: string;
    isCompleted: boolean;
}
export class UserManager {
    //login
    public static async login(input: IUser) {
        const res = await axios.post("/user/login", input);
        localStorage.setItem('qid_token', res.data);
        return res.data;
    }

    //reset-password
    public static async reset(phoneNumber: string) {
        const res = await axios.post("/user/reset-password", { phoneNumber });
        // console.log(res.data);
        return res.data;
    }

    //new-password
    public static async newPassword(input: { password: string, passwordConfirmation: string, phoneNumber: string }) {
        const res = await axios.post("/user/new-password", input);
        return res.data;
    }
    //sign up
    public static async signup(input: CreateInput) {
        const res = await axios.post("/user/signup", input);
        localStorage.setItem('phone', res.data.phoneNumber);
        return res.data
    }

    //verify
    public static async verify(input: { phoneNumber: string, code: string }) {
        const res = await axios.post("/user/verify-phone", input);
        return res.data;
    }
}


export class TodoManger {
    public static async getAll() {
        const res = await axios.get("/todo");
        return res.data;
    }

    public static async upsertTodo(todo: Partial<ITodo>) {
        const res = await axios.post('/todo', { ...todo });
    }
}


axios.defaults.baseURL = "http://localhost:3000/api/"

axios.interceptors.request.use(async (res) => {
    if (typeof (window) !== "undefined") {
        res.headers.Authorization = localStorage.getItem('qid_token');
    }
    return res;
}, (error) => {
    alert("Error happened, please try again later.")
    // in case error happen
})