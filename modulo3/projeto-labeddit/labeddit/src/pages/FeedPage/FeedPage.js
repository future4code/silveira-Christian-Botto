import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";

const FeedPage = () => {
    useProtectedPage()
    // const feed_aux = useRequestData([],`${BASE_URL}/posts`)
    // const feed = feed_aux[0]
    const [feed] = useRequestData([],`${BASE_URL}/posts`)

    const listFeed = feed.map ((post) => {
        return ( <p>{post.title} </p>)
    } )
    

    return (
<div>
FeedPage
    {listFeed }
</div>
    )
}

export default FeedPage