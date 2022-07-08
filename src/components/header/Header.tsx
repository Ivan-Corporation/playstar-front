import React, {useState} from 'react'
import './header.css'

// Components
import UserAuth from './userAuth/UserAuth'

// Icons
import searchIcon from './images/search.svg'
import searchSettingsIcon from './images/search-settings.svg'

// Нужно будет удалить, потому что картинка пользователя будет подгружаться
import userAvatar from './images/user.png'
import UserNotAuth from './userAuth/UserNotAuth'



function Header() {

    const [userAuth, setUserAuth] = useState(false)

    return (
        <header className="header" >
            {/* Search */}
            <div className="header__search search">
                <img className="search__icon" src={searchIcon} alt="search-icon" />
                <input className="search__input" placeholder="Начните вводить..." />
                <img className="search__icon search__settings-icon" src={searchSettingsIcon} alt="search-settings-icon" />
            </div>

            <div className="header__user">
            {/* User logic */}
                {userAuth 
                ? <UserAuth userIcon={userAvatar} changeAuth={setUserAuth} userName={''} />
                : <UserNotAuth changeAuth={setUserAuth} /> }
            </div>
        </header>
    )
}

export default Header