const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 0, message: 'Hi. That\'s my first post', likesCount: 61},
        {id: 1, message: 'Follow me', likesCount: 7}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            if (state.newPostText.length > 0) {
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                };
                state.posts.push(newPost);
                state.newPostText = '';
            }
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST});

export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});

export default profileReducer;