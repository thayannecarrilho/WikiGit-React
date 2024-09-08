import {InputContainer} from './styles'

function Input({value, onChange}) {
  return (
    <InputContainer>
      <input placeholder="Digite o Usuário/Repositório do GitHub"  value={value} onChange={onChange}/>
    </InputContainer>
  )
}

export default Input;
