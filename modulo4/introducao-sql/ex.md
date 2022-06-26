 1 -
 a) VARCHAR(255) é texto com até 255 caracteres, (6) para até 6 caracteres e DATE para data.
 b) Show databases mostra o arquivo de todo o banco
 c) Aparece uma janelinha com informações sobre a tabela.

 2 - 
 a)
 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  200000,
  "1963-08-23", 
  "female"
);

b)
Error Code: 1062. Duplicate entry '001' for key 'PRIMARY'
Diz que o valor 001 está duplicado, quando é um Primary key.

c)
Error Code: 1136. Column count doesn't match value count at row 1
Há menos valores tentando ser alterados na declaração.
Assim, basta alterar essa linha:
INSERT INTO Actor (id, name, salary) =>
INSERT INTO Actor (id, name, salary, birth_date, gender)

d)
Error Code: 1364. Field 'name' doesn't have a default value
Falta adicionar o nome e o valor que será inserido, já que name é NOT NULL (requerido)

e)
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Data deve ser escrito com aspas

3 - 
a)
SELECT * FROM Actor WHERE gender = "female";
b)
SELECT salary from Actor WHERE name = "Tony Ramos";
c)
Nçao encontra nada
d)
SELECT id, name, salary from Actor WHERE salary < 500000;
e)
Error Code: 1054. Unknown column 'nome' in 'field list'
A coluna é name, não nome.

4 - 
a)
SELECIONA DE (tabela) ACTOR ONDE (coluna) nome comeã por A OU(OR) J E(AND)  salÁRIO menor que 300000.
b)
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
c)
SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%");
d)
SELECT * FROM Actor 
WHERE 	(name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%")
AND salary BETWEEN 350000 AND 900000;

5 - 
a)

