import {profileReducer, addPostAC, InitialStateType} from "./profile-reducer";

// test.skip('new post should be added', () => {
//     const startState: InitialStateType = {
//         posts: [
//             {id: 1, message: 'First post', likesCount: 5},
//             {id: 2, message: 'Second post', likesCount: 7}
//         ],
//         newPostText: '',
//         profile: {}
//     }
//
//     const action = addPostAC()
//
//     const endState = profileReducer(startState, action)
//
//     expect(endState.posts.length).toBe(3)
//     expect(endState.posts[2].id).toBe(3)
// })
//
// test.skip('newPostText should not be empty', () => {
//     const startState: InitialStateType = {
//         posts: [
//             {id: 1, message: 'First post', likesCount: 5},
//             {id: 2, message: 'Second post', likesCount: 7}
//         ],
//         newPostText: '',
//         profile: {}
//     }
//
//     const action = updateNewPostTextAC('new text here')
//
//     const endState = profileReducer(startState, action)
//
//     expect(endState.newPostText).toBe('new text here')
//
// })