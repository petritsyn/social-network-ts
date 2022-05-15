import {ActionsTypes, ProfilePageType} from "./state";

export const addPostAC = (postText: string) => ({
    type: "ADD-POST",
    postText: postText
}) as const

export const updateNewPostTextAC = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
}) as const

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: 3, message: action.postText, likesCount: 10}
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