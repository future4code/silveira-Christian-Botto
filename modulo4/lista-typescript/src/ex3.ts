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



function flix(name:string, year:number, genre:GENERO, score?:number ) {
	const scored = score !== 0 ? {
        nome: name,
        anoLancamrento: year,
        genero: genre,
        pontuacao: score
	}
	:
	{
        nome: name,
        anoLancamrento: year,
        genero: genre,
	}
	return scored 
}


console.log(flix("oi", 21, GENERO.DRAMA))

