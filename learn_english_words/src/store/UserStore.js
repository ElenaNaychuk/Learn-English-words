import { makeAutoObservable } from "mobx";

class UserStore {
    user = {
        name: 'пользователь',
    };

    constructor() {
        makeAutoObservable(this);
    }

    changeUserName = (userName) => {
        this.user.name = userName;
    }
}

export default UserStore; 
