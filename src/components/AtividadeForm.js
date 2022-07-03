import {useState, useEffect} from 'react'

const atividadeInicial = {
    "id":0,
    "produto": "",
    "estoque": "",
    "peso": 0,
    "categoria": "",
    "valor": 0,
    "validade": 0
}

export default function AtividadeForm(props){ //props para receber o parametro do arquivo principal
  const [atividade, setAtividade] = useState(atividadeAtual())
  useEffect(() => {
    if(props.ativSelecionada.id !== 0)
      setAtividade(props.ativSelecionada)
  }, [props.ativSelecionada])//o useEffect quando a pagina abre e quando tem alteracao, ele e acionado, mais usando o ,[], ele sera acionado quando tiver uma dependencia dentro do[]
  const inputTextHandler = (e) => {
    const {name, value} = e.target;

    setAtividade({...atividade, [name]: value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(props.ativSelecionada.id !== 0)
      props.atualizarAtividade(atividade)
    else
      props.addAtividade(atividade)
    setAtividade(atividadeInicial)
  }
  const handleCancelar = (e) => {
    e.preventDefault()
    props.cancelarAtividade()
    setAtividade(atividadeInicial)
  }
  function atividadeAtual(){
    if (props.ativSelecionada.id !== 0){
      return props.ativSelecionada
    }else{
      return atividadeInicial;
    }
 }
  return(
    <>
    <h1 className='mt-3'>Levantamento do Estoque</h1>
    <h2>Produto: {atividade.id !== 0 ? atividade.id : ''}°</h2>
      <form className='row g-3 mt-3' onSubmit={handleSubmit}>
                <div className='col-md-6'>
                  <label className='text-primary fw-bold'>Produto:</label><br/>
                  <input name="produto" value={atividade.produto} onChange={inputTextHandler} id="produto" type="text" className='w-50 p-2'  placeholder='produto'/>
                </div>
                <div className='col-md-6'>
                  <label className='text-primary fw-bold'>Categoria:</label><br/>
                  <select name="categoria" value={atividade.categoria} onChange={inputTextHandler}  className='w-50 p-2' id="categoria" >
                  <option defaultValue="0">Selecionar...</option>
                    <option value="legumes">legume</option>
                    <option value="massas">massa</option>
                    <option value="frutas">fruta</option>
                    <option value="cereais">cereal</option>
                    <option value="frios">frio</option>
                    <option value="carnes">carne</option>
                    <option value="biscoitos">biscoito</option>
                    <option value="higiêne">higiêne</option>
                  </select>
                </div>
                <div className='col-6'>
                  <label className='text-primary fw-bold'>Valor:</label><br/>
                  <input name="valor" value={atividade.valor} onChange={inputTextHandler}  id="valor" className='w-50 p-2' type="number" min="0" placeholder='valor'/>
                </div>
                <div className='col-6'>
                <label className='text-primary fw-bold'>peso:</label><br/>
                  <input name="peso" value={atividade.peso} onChange={inputTextHandler}  id="peso" className='w-50 p-2' type="number" min="0" placeholder='peso'/>
                </div>

                <div className='col-6'>
                <label className='text-primary fw-bold'>Validade:</label><br/>
                  <input name="validade" value={atividade.validade} onChange={inputTextHandler}  id="validade" className='w-50 p-2' type="date" placeholder='validade' />{/*tem o type="month" */}
                </div>

                <div className="col-md-6">
                <label className="text-primary fw-bold">Nivel do Estoque:</label>
                <select name="estoque" value={atividade.estoque} onChange={inputTextHandler} id="estoque" className="form-select w-50 p-2">
                  <option defaultValue="0">Selecionar...</option>
                  <option value="Baixo">Baixo</option>
                  <option value="Medio">Medio</option>
                  <option value="Cheio">Cheio</option>
                </select>
                </div>
                <div className='col-12'>
                  {
                    atividade.id === 0 ?
                   <button  type='submit' className="btn btn-primary" >Inserir tabela</button>/*props para receber o parametro do arquivo principal */
                    :
                   <>
                   <button type='submit' className="btn btn-success me-2">Salvar</button>
                   <button onClick={handleCancelar} className="btn btn-warning">Cancelar</button>
                   </>
                  }
                  
                </div>
                  
          </form>
          </>
    )
}