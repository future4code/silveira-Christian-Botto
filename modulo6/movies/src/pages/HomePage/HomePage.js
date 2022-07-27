// React
import React, { useState, useEffect } from "react";

// Components
import CardFilters from "../../components/CardFilters";
import CardMovies from "../../components/CardMovies";
import CardPagination from "../../components/CardPagination";
import CardNextPrevious from "../../components/CardNextPrevious";


// Router
import { goToDetailsPage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";

// Urls
import { api_key } from "../../constants/urls";
import { url_genres } from "../../constants/urls";
import { url_popular } from "../../constants/urls";
import { url_images } from "../../constants/urls";
// import dotenv from 'dotenv'
// // dotenv.config()
    // require("dotenv").config()/
    // const api_key = process.env.REACT_APP_API_KEY;

// Requests
import axios from "axios";
import useRequestData from "../../hooks/useRequestData";

// Style
import { FilterContainer, ParPhrase, ParFilter, MovieContainer, FilterButtonContainer, PaginationContainer } from "./styled"

// Code
const HomePage = () => {

    // States and Constants 
    const navigate = useNavigate()
    let [genreSelect, setGenreSelect] = useState([])
    let [pageSelect, setPageSelect] = useState("1")
    let [movies, setMovies] = useState([])

    // Use Effects 

    useEffect(() => {
        if (genreSelect.length) {
            localStorage.setItem("genre", JSON.stringify(genreSelect))
        }
    }, [genreSelect]);

    useEffect(() => {
        const genreString = localStorage.getItem("genre")
        if (genreString) {
            const genreObj = JSON.parse(genreString)
            setGenreSelect(genreObj)
        }
    }, []);

    useEffect(() => {
        pagesMovies(pageSelect)
    }, [pageSelect]);


    // Requests
    const genres = useRequestData({}, `${url_genres}${api_key}&language=en-US`).genres

    const pagesMovies = (page) => {
        let url = (`${url_popular}${api_key}&page=${page}`)
        axios.get(url)
            .then((response) => {
                setMovies(response.data.results)
            })
            .catch((error) => {
                console.log(error)
                alert("Can't load data, refresh your browser")
            })
    }



    // Functions
    const onClickCard = (id) => {
        goToDetailsPage(navigate, id)
    }

    const onClickGenres = ((id) => {
        let newGenre = [...genreSelect]
        if (genreSelect.includes(id)) {
            newGenre = newGenre.filter(remove => remove !== id);
        } else {
            newGenre.push(id)
        }
        setGenreSelect(newGenre)

    })

    const onClickPagination = ((page) => {
        setPageSelect(page)
    })

    const onClickNext = ((page) => {
        const newPage = Number(page) + 1
        setPageSelect(newPage)
    })

    const onClickPrevious = ((page) => {
        let newPage = ""
        if (page === 1) {
             newPage = page
        } else {
            newPage = Number(page) - 1
        }
        setPageSelect(newPage)
    })

    // Render
    const GenresMap = genres && genres.map((genre) => {
        return (
            <CardFilters
                key={genre.id}
                name={genre.name}
                setGenreSelect={onClickGenres}
                id={genre.id}
                selected={genreSelect.includes(genre.id)}
            />
        )
    })

    const pagination = Array.from(Array(5), (_, i) => {
        if (pageSelect <= 5) {
            return i + 1
        } else if (pageSelect <=1000) {
            return i + pageSelect - 4
        }
    }
    
    )
    // const pagination = [1, 2, 3, 4, 5]
    const pagesMap = movies && pagination.map((page) => {
        return (
            <CardPagination
                key={page}
                number={page}
                onClickPagination={onClickPagination}
            />
        )
    })

    const MoviesMap = movies && genreSelect &&
        movies
            .filter((movie) => {
                if (genreSelect.length === 0) {
                    return movie
                } else {
                    return genreSelect.every((genre) => {
                        return movie.genre_ids.includes(genre)
                    })

                }
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

    return (
        <div>
            <FilterContainer>
                <ParPhrase>Here are the most popular titles today. Explore and enjoy!</ParPhrase>
                <ParFilter>Filter Options:</ParFilter>
                <FilterButtonContainer>
                    {GenresMap}
                </FilterButtonContainer>
            </FilterContainer>

            <PaginationContainer>

                <CardNextPrevious
                    name="Previous"
                    number={pageSelect}
                    onClickPagination={onClickPrevious}
                />

                {pagesMap}
                <CardNextPrevious
                    name="Next"
                    number={pageSelect}
                    onClickPagination={onClickNext}
                />
            </PaginationContainer>


            <MovieContainer>
                {MoviesMap}
            </MovieContainer>


        </div>
    )
}

export default HomePage