import {ActionsTypes, ProfilePageType} from "./store";

export const addPostAC = () => ({
    type: "ADD-POST",
}) as const

export const updateNewPostTextAC = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
}) as const

let initialState = {
    posts: [
        {id: 1, message: 'First post', likesCount: 5},
        {id: 2, message: 'Second post', likesCount: 7}
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: 3, message: state.newPostText, likesCount: 10}
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state

        default:
            return state;
    }
}

export default profileReducer;