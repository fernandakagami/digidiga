import person from '../../images/person.jpg'
import circle from '../../images/circle.png'
import './SectionOne.css'
import ContactContainer from '../Contact-Container'

function SectionOne() {
    return (
        <section className='Section-One'>
            <ContactContainer />
            <div className='Person-Container'> 
                <img className='circle' src={circle} alt='circle'></img>         
                <img className='person' src={person} alt='person'></img>
            </div>
        </section>
    )
}

export default SectionOne