import ListContainer from '../ListContainer'
import SectionThreeTitle from '../SectionThreeTitle'
import './SectionThree.css'

function SectionThree() {
    return (
        <section className='Section-Three-Background'>
            <div className='Section-Three'>
                <SectionThreeTitle />
                <ListContainer />            
            </div>                           
        </section>
    )
}

export default SectionThree