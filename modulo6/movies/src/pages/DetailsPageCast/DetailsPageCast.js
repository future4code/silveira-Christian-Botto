// Libraries
import React from "react";

// Router
import { useParams } from "react-router-dom";
import { goToDetailsPage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { goToDetailsPageCast } from "../../router/coordinator";


// Urls
import { api_key, url_details, url_images, url_person } from "../../constants/urls";

// Hooks
import useRequestData from "../../hooks/useRequestData";

// Style
import {
    ColumnOne, ColumnTwo, RecommendedContainer,
    RecAuxContainer, RecContainer, MainContainer, DivTitle,
    DivBio
} from "./styled";


// Components
import CardMovies from "../../components/CardMovies";


const DetailsPageCast = (props) => {

    // States and Constants
    const params = useParams()
    const navigate = useNavigate()

    // Functions
    const onClickCard = (id) => {
        goToDetailsPage(navigate, id)
    }

    // Requests
    const person= useRequestData({}, `${url_person}${params.id}?api_key=${api_key}&language=en-US`)

    const credits= useRequestData({}, `${url_person}${params.id}/combined_credits?api_key=${api_key}&language=en-US`).cast

    console.log(person.name)

    // Render
    const RecommendationsMap = credits && credits
        .map((movie) => {
            return (
                <CardMovies
                    key={movie.id}
                    poster={`${url_images}${movie.poster_path}`}
                    title={movie.original_title}
                    release={movie.release_date}
                    onClick={() => onClickCard(movie.id)}
                />
            )
        })


return (
    <MainContainer>
        <ColumnOne>
        <img src={`${url_images}${person.profile_path}`} />
        </ColumnOne>

        <ColumnTwo>
        <DivTitle>
        <p>{person && person.name}</p>
        </DivTitle>
        <DivBio>
        {person && person.biography}
        </DivBio>     
        <RecommendedContainer>
                <p>Known For</p>
            </RecommendedContainer>

        <RecAuxContainer>
                <RecContainer>
                    {RecommendationsMap}
                </RecContainer>
            </RecAuxContainer>
        </ColumnTwo>
        

    </MainContainer>
)

}
export default DetailsPageCast