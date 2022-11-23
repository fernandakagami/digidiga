import './RectangleSection.css'

function RectangleSection() {
    return (
        <section className='RectangleSectionContainer'>
            <ul className='RectangleSection'>
                <li className='RectangleSectionType'>
                    <small>01</small>
                    <p>Website Development</p>
                </li>
                <li className='RectangleSectionType'>
                    <small>02</small>
                    <p>Mobile Apps Development</p>
                </li>
                <li className='RectangleSectionType'>
                    <small>03</small>
                    <p>Branding & design</p>
                </li>
                <li className='RectangleSectionType'>
                    <small>04</small>
                    <p>IoT Solution</p>
                </li>
            </ul>            
        </section>
    )
}

export default RectangleSection