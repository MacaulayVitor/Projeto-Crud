import Atividade from './Atividade'

export default function AtividadeLista(props){
    return(
        <div className="mt-3">{/*mt-3= margem top, 3 vezes o tamanho */}
          {props.atividades.map((ativ) => (
            <Atividade  
            key={ativ.id}
            ativ={ativ}
            deletarAtividade={props.deletarAtividade}
            pegarAtividade={props.pegarAtividade}
            />
            
          ))}
    </div>
    )
}