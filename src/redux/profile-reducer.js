const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_BODY = 'UPDATE-NEW-POST-BODY';

let initialState = {
    posts: [
        {id: 0, message: 'Hi. That\'s my first post', likesCount: 61},
        {id: 1, message: 'Follow me', likesCount: 7}
    ],
    newPostBody: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            if (state.newPostBody.length > 0) {
                let newPost = {
                    id: 5,
                    message: state.newPostBody,
                    likesCount: 0
                };
                state.posts.push(newPost);
                state.newPostBody = '';
            }
            return state;
        case UPDATE_NEW_POST_BODY:
            state.newPostBody = action.newPostBody;
            return state;
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST});

export const updateNewPostTextCreator = (body) => ({type: UPDATE_NEW_POST_BODY, newPostBody: body});

export default profileReducer;