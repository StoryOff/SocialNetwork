import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 0, message: 'Hi. That\'s my first post', likesCount: 61},
            {id: 1, message: 'Follow me', likesCount: 7}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {id: 0, name: 'Roman'},
            {id: 1, name: 'Valera'},
            {id: 2, name: 'Vasyan'},
            {id: 3, name: 'Svetlana'},
            {id: 4, name: 'Georgiy'}
        ],
        messages: [
            {id: 0, message: 'Hello.'},
            {id: 1, message: 'How are you?'},
            {id: 2, message: 'I miss you'}
        ]
    }
}

export let addPost = () => {
    if (state.profilePage.newPostText.length > 0) {
        let newPost = {
            id: 5,
            message: state.profilePage.newPostText,
            likesCount: 0
        }
        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText = '';
        rerenderEntireTree(state);
    }
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}

export default state;