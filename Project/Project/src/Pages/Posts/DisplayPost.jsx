import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UpdatePost from "./UpdatePost";
import DeletePost from "./DeletePost";
import Comments from './Comments/Comments'
function DisplayPost(props) {
    const { post, posts, setPosts } = props;
    const [showMore, setShowMore] = useState(false);
    const [showComments, setShowComments] = useState(false)
    return (<>
        <div style={showMore ? { backgroundColor: '#dcdcdc' } : { backgroundColor: 'white' }}>

            <strong>TodoID:</strong>{post.id} <br />
            <strong>Title</strong>{post.title} <br />


            {showMore && <><strong>Body: </strong>{post.body} <br /></>}
            <DeletePost post={post} posts={posts} setPosts={setPosts} />
            <UpdatePost post={post} posts={posts} setPosts={setPosts} />
            {showMore ? <button onClick={(() => setShowMore(false))}>➖</button> : <button onClick={(() => setShowMore(true))}>➕</button>}

            {showMore && showComments && <Comments postId={post.id} />}</div>
    </>)
}
export default DisplayPost