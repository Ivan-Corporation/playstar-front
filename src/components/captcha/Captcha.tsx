import React from 'react';
import { useModal } from 'react-hooks-use-modal';
import close_modal from '../../images/so-icons/modal/close_modal.svg'
import './captcha.css'

function Captcha() {


  // For now the easiest way it's just add this logic in components where we need Captcha but it's need refactor if you want

    const [ModalCaptcha, captcha_open, captcha_close, captcha_isOpen] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: true
      });

      

    return (
      <React.Fragment>
     
        {/* <ModalCaptcha>
        <div className='modal__captcha'>
        <img onClick={captcha_close} className='modal__soc-icons-close' src={close_modal} alt='so-icons'/>
  
          <h1 className='modal__title' style={{marginBottom:'29px'}}>Подтвердите что вы не робот </h1>
         
          <div className="modal__form-captcha">
                <input className="modal__form_input-captcha" placeholder="Ваш номер телефона" type='text' required/>
            </div>
          <div className="modal__form">
                <input className="modal__form_input" placeholder="Ваша почта" type="text" required/>
            </div>
           
            <div className='modal_buttons' style={{marginTop:'30px'}}>
          <button className='modal__button_blue' onClick={captcha_close}>ЗАВЕРШИТЬ</button>
          </div>
        </div>
      </ModalCaptcha> */}
      
     
      </React.Fragment>
    )
}

export default Captcha