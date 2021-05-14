import React from "react";
import Union from "../images/Union.svg";
import Union1 from "../images/Union1.svg";
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom';

export default function InfoTooltip(props) {
    function handleClickClose(evt) {
        if (evt.target === evt.currentTarget) {
          props.onClose();
        }
    }
    return(
      <div>
            <div className={`popup popup_InfoTooltipPositive ${props.isOpenPositive}`}>
              <div className="popup__container" id="container1">
              <button type='button' className="popup__close-button" onClick={handleClickClose}></button>
                <form className="popup__form" name="InfoTooltipPositive">
                  <img src={Union} alt='Успешная регистрация' className="popup__notice-image" />
                  <p className="popup__notice-title">Вы успешно зарегистрировались!</p>
                </form>
              </div>
            </div>
             <div className={`popup popup_InfoTooltipNegative ${props.isOpenNegative}`}>
               <div className="popup__container" id="container1">
               <button type='button' className="popup__close-button" onClick={handleClickClose}></button>
                 <form className="popup__form" name={props.name}>
                   <img src={Union1} alt='Что-то пошло не так' className="popup__notice-image" />
                   <p className="popup__notice-title">Что-то пошло не так! Попробуйте ещё раз.</p>
                 </form>
               </div>
             </div>  
        </div>
    )
}