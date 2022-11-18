import './SectionFour.css'
import bni from '../../images/client/image 4.png'
import honda from '../../images/client/image 5.png'
import yamaha from '../../images/client/image 6.png'
import solusi from '../../images/client/image 7.png'
import bank from '../../images/client/image 8.png'
import granola from '../../images/client/image 9.png'
import stadt from '../../images/client/image 10.png'
import bnb from '../../images/client/image 11.png'

function SectionFour() {
    return (
        <section className='Section-Four'>
            <div className='Section-Four-Title'>
                <small className='Title-One-Client'>Our</small>
                <h5 className='Title-Two-Client'>Client</h5>
            </div>
            <div>
                <ul className='Client-List'>
                    <li>
                        <img src={bni} alt="bni"></img>
                    </li>
                    <li>
                        <img src={honda} alt="honda"></img>
                    </li>
                    <li>
                        <img src={yamaha} alt="yamaha"></img>
                    </li>
                    <li>
                        <img src={solusi} alt="solusi"></img>
                    </li>
                    <li>
                        <img src={bank} alt="bank"></img>
                    </li>
                    <li>
                        <img src={granola} alt="granola"></img>
                    </li>
                    <li>
                        <img src={stadt} alt="stadt"></img>
                    </li>
                    <li>
                        <img src={bnb} alt="bnb"></img>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SectionFour