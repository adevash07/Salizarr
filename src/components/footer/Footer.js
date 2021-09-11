import Button from "components/button/Button";
import InputField from "components/inputField/InputField";
import { Logo } from "images/image";
import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <section className='footer'>
      <div className='footer__con'>
        <div className='footer__first'>
          <Logo />
          <ul className='social'>
            <li className='social__item'>Facebook</li>
            <li className='social__item'>Instagram</li>
            <li className='social__item'>Linkedin</li>
            <li className='social__item'>twitter</li>
          </ul>
          <InputField type='email' />
          <p>&copy; 2021 debugger. All right reserved</p>
        </div>
        <div className='footer__second'>
          <div className='footer__second_flex'>
            <div className='quick'>
              <ul className='quick__list'>
                <li className='quick__list__item'>features</li>
                <li className='quick__list__item'>Food Menu</li>
                <li className='quick__list__item'>Offer</li>
                <li className='quick__list__item'>Review</li>
                <li className='quick__list__item'>Rider</li>
              </ul>
            </div>
            <div className='news'>
              <ul className='news__list__item'>
                <li className='news__list__item'>Blog</li>
                <li className='news__list__item'>FAQ</li>
                <li className='news__list__item'>Lift Media</li>
                <li className='news__list__item'>Press</li>
                <li className='news__list__item'>Press Kit</li>
              </ul>
            </div>
            <div className='app'>
              <Button></Button>
              <Button></Button>
            </div>
          </div>
          <div className='terms'>
            <ul className='terms__list'>
              <li className='terms__list__item'>Privacy</li>
              <li className='terms__list__item'>Terms</li>
              <li className='terms__list__item'>Terms</li>
              <li className='terms__list__item'>Service</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
