import React, { useState } from 'react'
import './header.css'

// Components
import UserAuth from './userAuth/UserAuth'

// Icons
import searchIcon from './images/search.svg'
import searchSettingsIcon from './images/search-settings.svg'

// Нужно будет удалить, потому что картинка пользователя будет подгружаться
import userAvatar from './images/user.png'

function UserNotAuth({ changeAuth }) {
    return (
        <div onClick={() => { changeAuth(true) }} className='header__item'>
            <svg className="header__icon" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.108 17.278C10.9258 17.4666 10.825 17.7192 10.8273 17.9814C10.8296 18.2436 10.9348 18.4944 11.1202 18.6798C11.3056 18.8652 11.5564 18.9704 11.8186 18.9727C12.0808 18.975 12.3334 18.8742 12.522 18.692L17.856 13.338C17.9026 13.2916 17.9395 13.2364 17.9647 13.1756C17.9899 13.1149 18.0029 13.0498 18.0029 12.984C18.0029 12.9182 17.9899 12.8531 17.9647 12.7924C17.9395 12.7316 17.9026 12.6764 17.856 12.63L12.522 7.278C12.3334 7.09584 12.0808 6.99505 11.8186 6.99733C11.5564 6.9996 11.3056 7.10477 11.1202 7.29018C10.9348 7.47559 10.8296 7.7264 10.8273 7.9886C10.825 8.2508 10.9258 8.5034 11.108 8.692L14.4 12H1C0.734784 12 0.48043 12.1054 0.292893 12.2929C0.105357 12.4804 0 12.7348 0 13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14H14.4L11.108 17.278ZM22 0H9C8.73478 0 8.48043 0.105357 8.29289 0.292893C8.10536 0.48043 8 0.734784 8 1C8 1.26522 8.10536 1.51957 8.29289 1.70711C8.48043 1.89464 8.73478 2 9 2H21C21.2652 2 21.5196 2.10536 21.7071 2.29289C21.8946 2.48043 22 2.73478 22 3V23C22 23.2652 21.8946 23.5196 21.7071 23.7071C21.5196 23.8946 21.2652 24 21 24H8.5C8.23478 24 7.98043 24.1054 7.79289 24.2929C7.60536 24.4804 7.5 24.7348 7.5 25C7.5 25.2652 7.60536 25.5196 7.79289 25.7071C7.98043 25.8946 8.23478 26 8.5 26H22C22.5304 26 23.0391 25.7893 23.4142 25.4142C23.7893 25.0391 24 24.5304 24 24V2C24 1.46957 23.7893 0.960859 23.4142 0.585786C23.0391 0.210714 22.5304 0 22 0Z" />
            </svg>
        </div>
    )
}

function Header() {

    const [userAuth, setUserAuth] = useState(false)

    return (
        <header className="header" >
            <div className="header__search search">
                <img className="search__icon" src={searchIcon} alt="search-icon" />
                <input className="search__input" placeholder="Начните вводить..." />
                <img className="search__icon search__settings-icon" src={searchSettingsIcon} alt="search-settings-icon" />
            </div>

            <div className="header__user">
                {/* changeAuth временная, нужно удалить */}
                {userAuth
                    ? <UserAuth userIcon={userAvatar} changeAuth={setUserAuth} />
                    : <UserNotAuth changeAuth={setUserAuth} />}
            </div>
        </header>
    )
}

export default Header