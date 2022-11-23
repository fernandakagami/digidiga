import './SectionChooseUs.css'
import girl from '../../images/girl.png'

function SectionChooseUs() {
    return (
        <div className='Section-Choose-Us'>
            <img src={girl} alt='girl' className='Section-Choose-Us-Image'></img>
            <div className='Section-Choose-Us-Text'>
                <h5>Why Choose us?</h5>
                <p><strong>Digidiga</strong> selalu menganggap client sebagai teman yang akan kami bantu untuk menyelesaikan masalahnya, kami akan bantu Anda karena kami mempunyai kelebihan seperti dibawah ini.</p>
            </div>
        </div>
        
    )
}

export default SectionChooseUs