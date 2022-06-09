1 -
a)
É um identificador de que aquela tabela está linkada com uma outra tabela, mais especificamente com a Primary Key desta.
b)
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
-----
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);
c)
Não pode pois não existe.
d)
ALTER TABLE Movie DROP COLUMN rating;
e)
Ele não permite, tem que apagar a outra tabela primeiro.

2 - 
a)
É uma tabela em N:M, onde um filme pode ter vários atores e um ator pode estar em vários filmes.
b)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
)
c)
Não pode pois eles não existem.
d)
Não pode, pois elas estão relacionadas

3 - 
a)
O inner join avalia cada entrada da esquerda e compara com cada entrada da direita. Achando um match, copia ambas as entradas.
O valor ON está linkando a tabela Rating com a tabela Movie.
b)
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
