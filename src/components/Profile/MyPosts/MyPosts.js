import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";

function MyPosts(props) {

    let postsElements = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostCreator());
    }

    let onPostChange = () => {
        let body = newPostElement.current.value;
        props.dispatch(updateNewPostTextCreator(body));
    }

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostBody}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    newpost
                </div>
                <div className={c.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts
