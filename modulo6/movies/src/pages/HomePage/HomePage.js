// React
import React, { useState } from "react";

// Components
import CardFilters from "../../components/CardFilters";
import CardMovies from "../../components/CardMovies";

// Router
import { goToDetailsPage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";

// Urls
import { api_key, url_genres } from "../../constants/urls";
import { url_popular } from "../../constants/urls";
import { url_images } from "../../constants/urls";
// import dotenv from 'dotenv'
// dotenv.config()
// const api_key = process.env.api_key;

// Requests
import useRequestData from "../../hooks/useRequestData";

// Style
import { FilterContainer, ParPhrase, ParFilter, MovieContainer, FilterButtonContainer } from "./styled"

const HomePage = () => {

    // States and Constants 
    const navigate = useNavigate()

    let filters = []
    const [filteredMovies, setFilteredMovies] = useState({})
    const [genreSelect, setGenreSelect] = useState("")

    // Requests
    const movies = useRequestData({}, `${url_popular}${api_key}`).results
    console.log(movies)

    const genres = useRequestData({}, `${url_genres}${api_key}&language=en-US`).genres

    // Functions
    const onClickCard = (id) => {
        goToDetailsPage(navigate, id)
    }
console.log(genreSelect)
    // Render
    const GenresMap = genres && genres.map((genre) => {
        return (
            <CardFilters
                key={genre.id}
                name={genre.name}
                setGenreSelect = {setGenreSelect}
                id = {genre.id}
            />
        )
    })
    const genresLength = genres && Object.keys(genres).length
    const MoviesMap = movies && 
    movies
    .filter((movie) =>{
        return movie.genre_ids.some((film) => {
            // console.log(film)
            return genreSelect === film
        })
    })
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

    // const genresLength = genres && Object.keys(genres).length
    // for (let ii = 0; ii < genresLength; ii++) {
    //     let newMovie = []

        // if (filters.includes(`${genres.name}`)) {
        //     filters = filters.filter(remove => remove !== `${genres.name}`);
        //     // Mudar cor do botão
        // } else {
        //     filters.push(`${genres.name}`)
        //     //Mudar cor do botão
        // };

    //     movies && movies.forEach((movie) => {
    //         if (movie.genre_ids.includes(`${genres.id}`)) {
    //             newMovie.push(movie)
    //         }
    //     })
    //     setFilteredMovies(newMovie)
    // }



    return (
        <div>
            <FilterContainer>
                <ParPhrase>Here are the most popular titles today. Explore and enjoy!</ParPhrase>
                <ParFilter>Filter Options:</ParFilter>
                <FilterButtonContainer>
                    {GenresMap}
                </FilterButtonContainer>
            </FilterContainer>

            <MovieContainer>
                {MoviesMap}
            </MovieContainer>


        </div>
    )
}

export default HomePage