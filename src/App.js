import {useState, useEffect} from 'react'
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';

let initialState = [
  {
    "id":1,
    "produto": "Macarrão",
    "estoque": "Medio",
    "peso": 1,
    "categoria": "massas",
    "valor": 12,
    "validade": "2024/12/31"
  },
  {
    "id":2,
    "produto": "Maça",
    "estoque": "Baixo",
    "peso": 3,
    "categoria": "fruta",
    "valor": 5,
    "validade": "2023/04/22"
    }
]
export default function App(){
  const [index, setIndex] = useState(0)
  const [atividades, setAtividades] = useState(initialState)
  const [atividade, setAtividade] = useState({id: 0})

  useEffect(() => {
    atividades.length <= 0 ? setIndex(1) :
    setIndex(Math.max.apply(Math,atividades.map((item) => item.id)) + 1,)
  }, [atividades])

  function addAtividade(ativ){
    setAtividades([...atividades,{...ativ, id: index}])
  }
function cancelarAtividade(){
  setAtividade({id: 0})
}
function atualizarAtividade(ativ){
  setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item))
  setAtividade({id: 0})
}
function deletarAtividade(id){
  const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id)
  setAtividades([...atividadesFiltradas])
}
function pegarAtividade(id){
  const atividade = atividades.filter((atividade) => atividade.id === id)
  setAtividade(atividade[0])
}
  return(
    <>
    <AtividadeForm //em vez de fazer ou passar os functions daqui para outro arquivo, e so usar parametros e props
        atividades={atividades}
        atualizarAtividade={atualizarAtividade}
        cancelarAtividade={cancelarAtividade}
        ativSelecionada={atividade}
        addAtividade={addAtividade}//vai ser passado o parametro para outro arquivo
    />
    <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
    />
    
    </>
  )
}