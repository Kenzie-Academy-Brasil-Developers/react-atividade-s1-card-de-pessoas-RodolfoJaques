import "../components/Dev/index.css"

function Pessoa(props){

    return(
        <div className="cardPessoa">
            <p><b>Nome: </b><span>{props.name}</span></p>
            <p><b>Idade: </b><span>{props.age}</span></p>
            <p><b>País: </b><span>{props.country}</span></p>
            
            <div>______________</div>
        </div>
        
    )
}

export default Pessoa