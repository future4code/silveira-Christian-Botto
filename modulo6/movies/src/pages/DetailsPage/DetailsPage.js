// Libraries
import React from "react";

// Router
import { useParams } from "react-router-dom";

// Urls
import { api_key, url_details, url_images } from "../../constants/urls";

// Hooks
import useRequestData from "../../hooks/useRequestData";

// Style
import { ColumnOne, ColumnTwo, Firstontainer, IMG, DivInfo } from "./styled";

// COmponents
import CardGenres from "../../components/CardGenres";



const DetailsPage = (props) => {

    // States and Constants
    const params = useParams()

    // Requests
    const movie = useRequestData({}, `${url_details}${params.id}?api_key=${api_key}&language=en-US`)
    console.log(movie)



    const release = useRequestData([], `${url_details}${params.id}/release_dates?api_key=${api_key}`).results
    const releaseUS = release && release.filter((rel) => {
        return (
            rel.iso_3166_1.includes("US")
        )
    })
    console.log(releaseUS)
    console.log(releaseUS && releaseUS[0].release_dates)


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





    return (
        <div>
            <Firstontainer>
                <ColumnOne>
                    <IMG src={`${url_images}${movie.poster_path}`} />
                </ColumnOne>

                <ColumnTwo>
                    <h2>{movie && movie.original_title}</h2>
                    <DivInfo>
                        CLASSIFICAÇÃO ETÁRIA
                        &nbsp; &middot; &nbsp;
                        {movie && movie.release_date} (US)
                        &nbsp; &middot; &nbsp;
                        {genresMap}
                        &middot; &nbsp;
                        {runtimeNew[0]}h{runtimeNew[1]}m
                    </DivInfo>
                    <h3>User Score {movie && movie.vote_average}</h3>
                    <h3>Overview</h3>
                    <h4>{movie && movie.overview} </h4>
                </ColumnTwo>



            </Firstontainer>
            
        </div>
    )
}

export default DetailsPage