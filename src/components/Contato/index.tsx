import { type FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { type Contato as ContatoType, editar, remover } from '../../store/reducers/contatos'
import { Botao, Campo } from '../../styles'
import { validar } from '../Formulario'
import * as S from './styles'

const iniciais = (nome: string) =>
  nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join('')

const Contato = ({ contato }: { contato: ContatoType }) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [nome, setNome] = useState(contato.nome)
  const [email, setEmail] = useState(contato.email)
  const [telefone, setTelefone] = useState(contato.telefone)
  const [erro, setErro] = useState('')

  const cancelar = () => {
    setNome(contato.nome)
    setEmail(contato.email)
    setTelefone(contato.telefone)
    setErro('')
    setEditando(false)
  }

  const salvar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const mensagem = validar(nome, email, telefone)
    if (mensagem) {
      setErro(mensagem)
      return
    }
    dispatch(editar({ id: contato.id, nome: nome.trim(), email: email.trim(), telefone: telefone.trim() }))
    setErro('')
    setEditando(false)
  }

  if (editando) {
    return (
      <S.Card>
        <S.Edicao onSubmit={salvar} noValidate>
          <Campo aria-label="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
          <Campo aria-label="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Campo aria-label="Telefone" type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          {erro && <p role="alert" style={{ color: '#e0413a', fontSize: 13 }}>{erro}</p>}
          <S.Acoes>
            <Botao type="submit">Salvar</Botao>
            <Botao type="button" $variante="secundario" onClick={cancelar}>
              Cancelar
            </Botao>
          </S.Acoes>
        </S.Edicao>
      </S.Card>
    )
  }

  return (
    <S.Card>
      <S.Avatar aria-hidden="true">{iniciais(contato.nome)}</S.Avatar>
      <S.Info>
        <h3>{contato.nome}</h3>
        <p>{contato.email}</p>
        <p>{contato.telefone}</p>
      </S.Info>
      <S.Acoes>
        <Botao type="button" $variante="secundario" onClick={() => setEditando(true)}>
          Editar
        </Botao>
        <Botao type="button" $variante="perigo" onClick={() => dispatch(remover(contato.id))}>
          Remover
        </Botao>
      </S.Acoes>
    </S.Card>
  )
}

export default Contato
