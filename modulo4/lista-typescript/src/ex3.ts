enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type movies = {
    name: string,
    releaseDate: number,
    genre: GENERO,
score?: number
}



function flix(name:string, year:number, genre:GENERO, score?:number ): movies {
    const movie: movies= {
        nome: name,
        anoLancamrento: year,
        genero: genre,
        pontuacao: score
        }
    return movie
} 

console.log(flix("oi", 21, GENERO.DRAMA))

