export default function Atividade(props){
    function estoqueLabel(param){
        switch(param){
          case "Baixo":
            return "Baixo";
          case "Medio":
            return "Medio";
          case "Cheio":
            return "Cheio";
            default:
              return "Não definido"
        }
      }
      
      function estoqueStyle(param, icone){
        switch(param){
          case "Baixo":
            return icone ? "danger" : "danger";
          case "Medio":
            return icone ? "warning" : "warning";
          case "Cheio":
            return icone ? "success" : "success";
            default:
              return "Não definido"
        }
      }
    return(
        <div className={"card mb-2 shadow-sm border-"+ estoqueStyle(props.ativ.estoque)}>
              <div className='card-body'>
                <div className='d-flex justify-content-between'>
                    <h5 id='produto' className='card-title'>
                        {props.ativ.id}° Produto: {props.ativ.produto}
                    </h5>
                    <h6 className=''>
                        Nivel do Estoque: 
                        <span id='estoque' className={'fw-bold ms-1 text-' + estoqueStyle(props.ativ.estoque)}>
                          {estoqueLabel(props.ativ.estoque)} 
                        </span>
                    </h6>
                </div>
                <p className='card-text fw-bold'>&emsp;Categoria: {props.ativ.categoria}&emsp; - &emsp;Valor R$: {props.ativ.valor}&emsp; - &emsp;Validade: {props.ativ.validade}&emsp; - &emsp;Peso: {props.ativ.peso}Kg</p>
                <div className='d-flex justify-content-end  pt-2 m-0 border-top'>
                    <button className='btn btn-sm btn-outline-primary me-2' onClick={() => props.pegarAtividade(props.ativ.id)}>
                      <i className='fas fa-pen me-2'></i>
                        Editar
                    </button>
                    <button
                        className='btn btn-sm btn-outline-danger'
                        onClick={() => props.deletarAtividade(props.ativ.id)}>
                        <i className='fas fa-trash me-2'></i>
                            Deletar
                    </button>
                </div>
              </div>
            </div>
    )
}