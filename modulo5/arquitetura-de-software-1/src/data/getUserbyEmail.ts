public async getUserByEmail(email: string): Promise<any> {
    try {

      const result = await connection()
        .select("*")
        .from(TABLE_NAME)
        .where({ email });
			if(!result[0]){
				throw new Error("Usuário não encontrado");
			}
      return result[0];
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
