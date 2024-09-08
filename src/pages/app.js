import gitlogo from '../assets/git.png'
import { Container, ContainerFlex } from './styles'
import Input from '../components/Input'
import ItemRepo from '../components/ItemRepo'
import Button from '../components/Button'
import { useState } from 'react'
import { api } from '../services/api'

function App() {
  
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      
      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);
        
        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return;
        }
      } else {
        alert('Repositório não Encontrado!!');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('Repositório não Encontrado!!');
      } else {
        console.error('Erro ao buscar repositório:', error);
      }
    }
  }  

  const handleRemoveRepo = (repoId) => {
    setRepos(prev => prev.filter(repo => repo.id !== repoId))
  }


    return (
      <Container>
        <img src={gitlogo} height={72} width={72} alt='github' />
        <h1 className='title'>Wiki de Repositórios</h1>
        <ContainerFlex>
          <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
          <Button onClick={handleSearchRepo} />
        </ContainerFlex>
        {repos.map(repo => 
        <ItemRepo 
        repo={repo}
        key={repo.id}
        onRemove={() => handleRemoveRepo(repo.id)}
        />
        )}
      </Container>
  );
}

export default App;
