import './footer.css'
import twi from '../../images/so-icons/twi.svg'
import kv from '../../images/so-icons/kv.svg'
import dis from '../../images/so-icons/dis.svg'
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

                    <div className="footer__so-icons">
                        <ul className="so-icons__list">

                            <li className="so-icons__item">
                                <a className="so-icons__link" href="/">
                                    <img src={kv} className="so-icons__img" alt="kv-icon" />
                                </a>
                            </li>

                            <li className="so-icons__item">
                                <a className="so-icons__link" href="/">
                                    <img className="so-icons__img" src={twi} alt="twi-icon" />
                                </a>
                            </li>

                            <li className="so-icons__item">
                                <a className="so-icons__link" href="/">
                                    <img className="so-icons__img" src={dis} alt="dis-icon" />
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