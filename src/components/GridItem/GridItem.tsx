import { level } from "../../helpers/IMC";
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: level
}

export const GridItem = ({ item }: Props) =>{
    return(
        <div className={styles.main} style={{backgroundColor: item.color}}>
            {/* adicionando os valores dentro do array IMC para as respectivas divs */}
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="404" width={30} /> 
            </div>
            <div className={styles.gridTitle}>
                {item.title}
            </div>

            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m2</div>
            }

            <div className={styles.gridInfo}>
                <span>
                    O IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </span>
            </div>
        </div>
    );
}