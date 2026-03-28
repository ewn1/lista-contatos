class Contato {
  nomeCompleto: string
  email: string
  telefone: number
  id: number

  constructor(
    nomeCompleto: string,
    email: string,
    telefone: number,
    id: number,
  ) {
    this.nomeCompleto = nomeCompleto
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Contato
