import { FormEvent, useState } from 'react'
import './App.css'



function App() {
  const [nome,setNome] = useState('')
  const [nomeValue,setNomeValue] = useState('')
  const [ano, setAno] = useState<number | undefined>(undefined)
  const [resultado, setResultado] = useState<number | undefined>(undefined)
 



  function calcular(event:FormEvent){
    event.preventDefault()
    

    if (ano === undefined) {
      setResultado(undefined);
      return ;
    }
    let anoAtual = new Date().getUTCFullYear();
    
    let calculo = (anoAtual - ano)

    if(calculo < 0){
      alert('O ano deve ser 2024 ou menor')
    }
    
    setResultado(calculo)
  }
  
  function handleSubmit (){
    setNomeValue(nome)
  }
  
  
  
  
  

   

   

  return (
    
      <div className='container'>
        <h1 className='title'>Descubra sua idade</h1>

        <form className='form' onSubmit={calcular}>
            <label>Digite seu nome</label>
            <input
            className='input'
            placeholder='Digite seu nome'
            value={nome}
            onChange={ (e) => setNome(e.target.value)}
            required>
            </input>

            <label>Digite o ano que você nasceu</label>
            <input
            className='input'
            placeholder='Digite o ano do seu nascimento'
            type='number'
            value={ano}
            onChange={ (e) => setAno(Number(e.target.value))}
            required>
            </input>
            
          <input onClick={handleSubmit} className='button' type='submit' value='calcular idade'></input>

        </form>
        {ano && nomeValue !== '' && resultado!! > 0  &&(
          <section className='result'>
          <h2 className='newTitle'>{nomeValue} você tem ou faz esse ano {resultado} anos de idade!</h2>
        </section>
        )}
        </div>

  )
}

export default App
 

    
    

   

