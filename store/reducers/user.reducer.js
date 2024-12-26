import { userService } from "../../services/user.service.js"

//* User
export const SET_USER = 'SET_USER'


const initialState = {
    loggedInUser: userService.getLoggedinUser(),
}


export function userReducer(state = initialState, cmd = {}) {
    switch (cmd.type) {
        //* User
        case SET_USER:
            return {
                ...state,
                loggedInUser: cmd.user
            }
        default:
            return state
    }
}
