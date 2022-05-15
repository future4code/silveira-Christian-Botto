import React from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { goToPost } from "../../routes/coordinator";
import FeedForm from "./FeedForm";

const FeedPage = () => {    
    useProtectedPage()
    const navigate = useNavigate()
    // const feed_aux = useRequestData([],`${BASE_URL}/posts`)
    // const feed = feed_aux[0]

    const [feed] = useRequestData([],`${BASE_URL}/posts`)


    const onClickPost = (id) => {
        goToPost(navigate,id)
        console.log("clicou")
    }

    const listFeed = feed.map ((post) => {
        return ( 
        <PostCard
        key = {post.id}
            title={post.title} 
            onClick = {onClickPost}
            id = {post.id}
           />
        )
    } )
    

    return (
<div>
<FeedForm />
    {listFeed }
</div>
    )
}

export default FeedPage