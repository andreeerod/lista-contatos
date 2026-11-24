import { type FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { adicionar } from '../../store/reducers/contatos'
import { Botao, Campo } from '../../styles'
import * as S from './styles'

export const validar = (nome: string, email: string, telefone: string) => {
  if (!nome.trim() || !email.trim() || !telefone.trim()) return 'Preencha todos os campos.'
  if (!/^\S+@\S+\.\S+$/.test(email.trim())) return 'Informe um e-mail válido.'
  return ''
}

const Formulario = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [erro, setErro] = useState('')

  const aoEnviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const mensagem = validar(nome, email, telefone)
    if (mensagem) {
      setErro(mensagem)
      return
    }
    dispatch(adicionar({ nome: nome.trim(), email: email.trim(), telefone: telefone.trim() }))
    setNome('')
    setEmail('')
    setTelefone('')
    setErro('')
  }

  return (
    <S.Form onSubmit={aoEnviar} noValidate>
      <h2>Novo contato</h2>
      <S.Rotulo>
        Nome completo
        <Campo value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Ex.: João da Silva" />
      </S.Rotulo>
      <S.Linha>
        <S.Rotulo>
          E-mail
          <Campo type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="joao@email.com" />
        </S.Rotulo>
        <S.Rotulo>
          Telefone
          <Campo type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="(11) 91234-5678" />
        </S.Rotulo>
      </S.Linha>
      {erro && <S.Erro role="alert">{erro}</S.Erro>}
      <div>
        <Botao type="submit">Adicionar contato</Botao>
      </div>
    </S.Form>
  )
}

export default Formulario
