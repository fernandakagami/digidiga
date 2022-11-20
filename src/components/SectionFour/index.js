import './SectionFour.css'
import bni from '../../images/client/image 4.png'
import honda from '../../images/client/image 5.png'
import yamaha from '../../images/client/image 6.png'
import solusi from '../../images/client/image 7.png'
import bank from '../../images/client/image 8.png'
import granola from '../../images/client/image 9.png'
import stadt from '../../images/client/image 10.png'
import bnb from '../../images/client/image 11.png'

const clients = [bni, honda, yamaha, solusi, bank, granola, stadt, bnb]

function SectionFour() {
    return (
        <section className='Section-Four'>
            <div className='Section-Four-Title'>
                <h4 className='Title-One-Client'>Our</h4>
                <h3 className='Title-Two-Client'>Client</h3>
            </div>
            <div>
                <ul className='Client-List'>
                    { clients.map( (client) => (
                        <li className='Client' key={client}>
                            <img src={client} alt={client}></img>
                        </li>                        
                    ))}                    
                </ul>
            </div>
            <div>
                <h5></h5>
            </div>
        </section>
    )
}

export default SectionFour