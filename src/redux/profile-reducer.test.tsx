import {profileReducer, addPostAC, deletePostAC} from "./profile-reducer";

let startState = beforeEach(() => {
    return {
        posts: [
            {id: 1, message: 'First post', likesCount: 5},
            {id: 2, message: 'Second post', likesCount: 7}
        ],
        profile: null,
        status: ''
    }
})

test('new post should be added', () => {

    const action = addPostAC('new post')

    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(3)
    expect(endState.posts[2].id).toBe(3)
    expect(endState.posts[2].message).toBe('new post')
})

test.skip('the post should be deleted', () => {
    const action = deletePostAC(2)
    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(1)
    expect(endState.posts[0].id).toBe(1)
})