import './footer.css'
import twitch from '../../images/social/twi.svg'
import vk from '../../images/social/kv.svg'
import discord from '../../images/social/dis.svg'
import logo from '../../images/logo.svg'


function Footer() {

    return (
        <footer className="footer">
            <div className="footer__container">
                {/* <!-- width: 1354px --> */}
                <div className="footer__inner">

                    <div className="footer__logo logo">
                        <a className="logo__link" href="/">
                            <img className="logo__img" src={logo} alt="logo" />
                        </a>
                    </div>

                    <div className="footer__menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a className="menu__link menu__link_active" href="/">О нас</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="/">Контакты</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="/">Условия</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="/">Партнёрство</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="/">Реферальная система</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="/">Пользовательское соглашение</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="/">Политика конфиденциальности</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="/">Авторы игр</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__social">
                        <ul className="social__list">

                            <li className="social__item">
                                <a className="social__link" href="/">
                                    <img src={vk} className="social__img" alt="vk-icon" />
                                </a>
                            </li>

                            <li className="social__item">
                                <a className="social__link" href="/">
                                    <img className="social__img" src={twitch} alt="twitch-icon" />
                                </a>
                            </li>

                            <li className="social__item">
                                <a className="social__link" href="/">
                                    <img className="social__img" src={discord} alt="discord-icon" />
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}
export default Footer