import headerList from "./headerList"
import Logo from '../../../../public/logo.svg'
import { headerContainer, headerLogo } from "./header.css"

export default function Header() {
    return(
        <header className={headerContainer}>
          <div className={headerLogo}>
            <Logo />
          </div>
        <nav>
          <ul>
            {headerList.map( (it, index) => {
                return(
                    <li key={index} >{it.name}</li>
                )
            })}
          </ul>
        </nav>
      </header>
    )
}