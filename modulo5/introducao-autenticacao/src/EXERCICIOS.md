1 - 
a) 
Matematicamente há mais possibilidades de combinações quanto maior é o espaço de elementos.
Por exemplo, para uma senha de 6 dígitos numérico há 10^6 (0-9) combinações possíveis.
Se nós adicionarmos 26 letras do alfabeto, viram 36^6. Se essas letras podem ser minúsculas ou maiúsculas, 
62^10. 

2 - 
a)
Na primeira parte do código é criado uma conexão utilizando os dados vindo do dotenv.
Na segunda parte, uma função assíncrona é criada, aonde ela insere od emaiil e password na tabela useerTableName.

b)
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

3 - 
a)
Ela vai tratar a chave como uma string.

7 - 
Porque pode ser qualquer coisa retornando.
