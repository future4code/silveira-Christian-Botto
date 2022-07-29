// Libraries
import React from "react";

// Router
import { useParams } from "react-router-dom";
import { goToDetailsPage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";


// Urls
import { api_key, url_details, url_images } from "../../constants/urls";

// Hooks
import useRequestData from "../../hooks/useRequestData";

// Style
import {
    ColumnOne, ColumnTwo, Firstontainer, IMG, DivInfo,
    CastContainer, OriginalCastContainer, TrailerContainer,
    CastAuxContainer, VideoContainer, DivScoreOverview,
    DivScore, DivOverview, DivTitle, DivCrew,
    DivExec, DivDirector, DivDir, RecommendedContainer,
    RecAuxContainer, RecContainer, MainContainer, DivDirTitle,
    DivTextOverview
} from "./styled";

// Components
import CardGenres from "../../components/CardGenres";
import CardPercentage from "../../components/CardPercentage";
import CardActors from "../../components/CardActors";
import CardMovies from "../../components/CardMovies";
import YoutubeEmbed from "../../components/YoutubeEmbed";



const DetailsPage = (props) => {

    // States and Constants
    const params = useParams()
    const navigate = useNavigate()

    // Functions
    const onClickCard = (id) => {
        goToDetailsPage(navigate, id)
    }

    // Requests
    const movie = useRequestData({}, `${url_details}${params.id}?api_key=${api_key}&language=en-US`)

    const release = useRequestData([], `${url_details}${params.id}/release_dates?api_key=${api_key}`).results

    const credits = useRequestData({}, `${url_details}${params.id}/credits?api_key=${api_key}&language=en-US`)

    const crew = useRequestData({}, `${url_details}${params.id}/credits?api_key=${api_key}&language=en-US`).crew

    const videos = useRequestData({}, `${url_details}${params.id}/videos?api_key=${api_key}&language=en-US`).results

    const recommendations = useRequestData({}, `${url_details}${params.id}/recommendations?api_key=${api_key}&language=en-US&page=1`).results

    // Render
    const minToHour = (movie) => {
        let runtimeFinal = []
        const minutes = movie.runtime
        if (minutes < 60) {
            return runtimeFinal = minutes
        } else {
            const hours_aux = minutes / 60
            const finalHours = Math.floor(hours_aux)
            const newMinutes = (hours_aux - finalHours) * 60
            const finalMinutes = Math.round(newMinutes);

            return [finalHours, finalMinutes]
        }
    }
    const runtimeNew = movie && minToHour(movie)



    const genresMap = movie.genres && movie.genres.map((film) => {
        return (
            <CardGenres
                key={film.id}
                name={film.name}
            />
        )
    })

    const ActorsMap = credits.cast && credits.cast
        .map((actor) => {
            return (
                <CardActors
                    key={actor.cast_id}
                    pic={`${url_images}${actor.profile_path}`}
                    character={actor.character}
                    actor={actor.original_name}
                />
            )
        })

    const RecommendationsMap = recommendations && recommendations
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

    const trailer = videos && videos.filter((video) => {
        return (
            video.type.includes("Trailer")
        )
    })

    const director = crew && crew.filter((crew) => {
        return (
            crew.job.match("^Director$")
        )
    })

    const execProducer = crew && crew.filter((crew) => {
        return (
            crew.job.match("^Executive Producer$")
        )
    })

    const releaseUS = release && release.filter((rel) => {
        return (
            rel.iso_3166_1.includes("US")
        )
    })



    return (
        <MainContainer>
            <Firstontainer>
                <ColumnOne>
                    <IMG src={`${url_images}${movie.poster_path}`} />
                </ColumnOne>

                <ColumnTwo>
                    <DivTitle>
                        {movie && movie.original_title}
                    </DivTitle>

                    <DivInfo>
                        {(releaseUS && releaseUS[0] !== undefined && releaseUS[0].iso_3166_1 == "US") ? releaseUS[0].release_dates[0].certification : "No Info"}
                        &nbsp; &middot; &nbsp;
                        {movie && movie.release_date} (US)
                        &nbsp; &middot; &nbsp;
                        {genresMap}
                        &middot; &nbsp;
                        {runtimeNew[0]}h{runtimeNew[1]}m
                    </DivInfo>
                    <DivScoreOverview>
                        <DivScore>
                            <h3>User Score </h3>
                            <CardPercentage
                                score={movie && movie.vote_average * 10}
                                dataProgress={movie && Math.round(movie.vote_average * 10)} />
                        </DivScore>
                        <DivOverview>
                            <h3>Overview</h3>
                            <DivTextOverview>{movie && movie.overview} </DivTextOverview>
                        </DivOverview>
                    </DivScoreOverview>

                    <DivCrew>
                        <DivDirector>
                            <DivDirTitle>Director</DivDirTitle>
                            <DivDir>{director && director[0].name}</DivDir>
                        </DivDirector>
                        <DivExec>
                            <DivDirTitle>Executive Producer</DivDirTitle>
                            <DivDir>{(execProducer && execProducer.length !== 0) ? execProducer[0].name : "No Info"}</DivDir>
                        </DivExec>
                    </DivCrew>


                </ColumnTwo>
            </Firstontainer>

            <OriginalCastContainer>
                <p>Original Cast</p>
            </OriginalCastContainer>

            <CastAuxContainer>
                <CastContainer>
                    {ActorsMap}
                </CastContainer>
            </CastAuxContainer>


            <TrailerContainer>
                <p>Trailer</p>
            </TrailerContainer>



            <VideoContainer>
                <YoutubeEmbed embedId={trailer && trailer[0].key} />
            </VideoContainer>

            <RecommendedContainer>
                <p>Recommendations</p>
            </RecommendedContainer>

            <RecAuxContainer>
                <RecContainer>
                    {RecommendationsMap}
                </RecContainer>
            </RecAuxContainer>


        </MainContainer>
    )
}

export default DetailsPage