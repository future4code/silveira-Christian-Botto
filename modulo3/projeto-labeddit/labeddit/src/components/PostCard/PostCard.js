import React from 'react'
import { PostCardContainer, Button, PostCards } from './styled'

const PostCard = (props) => {

    return (
        <PostCards>
            <PostCardContainer >
                <h4>{props.title}</h4>
                <Button onClick={() => props.onCLick(props.id)}>Go to post</Button>
            </PostCardContainer>
        </PostCards>
    )
}

export default PostCard
