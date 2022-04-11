import { useState } from "react";
import styles from "./App.module.css";
import img from "./assets/powered.png";
import leftArrowImg from "./assets/leftarrow.png";
import {GridItem} from './components/GridItem';

import {levels, calculateImc, level} from './helpers/IMC';

const App = () =>{

  const [heighField,setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<level | null>();

  const handleCalculateButton = () =>{
    if(heighField && weightField) {
      setToShow(calculateImc(heighField,weightField)); // se a altura e o peso estiverem preenchidos, a função calculateImc ira calcular o imc do usuario com base na altura e peso
    } else {
      alert('Digite todos os campos!')
    }
  }

  // a função resposavel por limpar o campo
  const handleBackButton = () =>{
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={img} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Indice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            type="number" 
            placeholder=" Digite a sua altura. EX 1.5 (em metros)" value={heighField > 0 ? heighField : ""} onChange={(e) => {setHeightField(parseFloat(e.target.value))}} // o valor só sera mostrado se for maior que 0, caso contrario nao mostra nada. sempre que houver uma alteração no campo, o valor do campo será armazenado na função setHeighField, que será usado pela variavel HeighField
            disabled={toShow ? true : false} // o campo será desabilitado quando a função toShow não for null
          />
          <input 
            type="number" 
            placeholder=" Digite o seu peso. EX 55.3 (em Kg)" value={weightField > 0 ? weightField : ""} onChange={(e) => {setWeightField(parseFloat(e.target.value))}}
            disabled={toShow ? true : false}
          />

          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key)=>(
                <GridItem key={key} item={item}/>
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImg} alt="arrow" width={25}/>
              </div> 
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  )
  
}

export default App;