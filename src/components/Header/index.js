import NavigationHeader from "../NavigationHeader"
import Title from "../Title"
import './Header.css'

function Header () {
    return (
      <header className="App-header">
        <Title />      
        <NavigationHeader />
      </header>
    )
}

export default Header