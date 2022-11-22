import './SectionFour.css'
import ClientList from '../ClientList'


function SectionFour() {
    return (
        <section className='Section-Four'>
            <div className='Section-Four-Title'>
                <h4 className='Title-One-Client'>Our</h4>
                <h3 className='Title-Two-Client'>Client</h3>
            </div>
            <ClientList />                      
            <div className='Section-Four-Choose-Us'>
                <h5>Why Choose us?</h5>
                <p><strong>Digidiga</strong> selalu menganggap client sebagai teman yang akan kami bantu untuk menyelesaikan masalahnya, kami akan bantu Anda karena kami mempunyai kelebihan seperti dibawah ini.</p>
            </div>
        </section>
    )
}

export default SectionFour