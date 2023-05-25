import styles from './Logos.module.css'
import lg from '../assets/lg.png'
import nothing from '../assets/nothing.png'
import oneplus from '../assets/oneplus.jpg'

export default function Logos() {
    return (
        <>
            <div className={styles.container}>
                <h3>Who Supports Us?</h3>
                <div>
                    <img src={nothing} alt="Nothing" />
                    <img src={lg} alt="Lg" />
                    <img src={oneplus} alt="OnePlus" />
                </div>

            </div>
        </>
    );
}