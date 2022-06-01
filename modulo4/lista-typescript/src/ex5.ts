enum enumRole {
    user = 'user',
    admin = 'admin'
  }
  
  const adm =  [
      {name: "Rogério", email: "roger@email.com", role: enumRole.user},
      {name: "Ademir", email: "ademir@email.com", role: enumRole.admin},
      {name: "Aline", email: "aline@email.com", role: enumRole.user},
      {name: "Jéssica", email: "jessica@email.com", role:enumRole.user},  
      {name: "Adilson", email: "adilson@email.com", role: enumRole.user},  
      {name: "Carina", email: "carina@email.com", role: enumRole.admin}      
  ] 
  
  type typeAdm = {
    name: string,
    email: string,
    role: enumRole,
  }
  
  function infoAdm(typeAdm:typeAdm[]){
    const filterEmails = typeAdm.filter((dados) => {
      if(dados.role === 'admin'){
        return dados
      }
    }).map((dados) => {
      return dados.email
    })
    return filterEmails
  }
  console.log(infoAdm(adm));