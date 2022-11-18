import './NavigationHeader.css'

const textOptions = ['About us', 'Our project', 'Clients'];

function NavigationHeader() {
    return (
        <nav>
            <ul className='Navegation-Bar'>
                { textOptions.map( (textOption) => (
                    <li key={textOption} className='Navegation-Option'><a href='/'>{textOption}</a></li>                    
                ))}
            </ul>
        </nav>
    )
}

export default NavigationHeader