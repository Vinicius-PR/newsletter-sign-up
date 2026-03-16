import { useState } from 'react';
import illustrationImg from '../../assets/images/illustration-sign-up-desktop.svg';
import illustrationImgMobile from '../../assets/images/illustration-sign-up-mobile.svg';
import iconList from '../../assets/images/icon-list.svg';
import { useNavigate } from 'react-router-dom';

import './styles.css';

export default function Home({ email, onSetEmail }) {
  let navigate = useNavigate();
  const [invalid, setInvalid] = useState(false)

  function validateEmail(email) {
    const regex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
    if (!regex.test(email)) {
      setInvalid(true)
      return false
    } else {
      setInvalid(false)
      return true
    }
  }

  return (
    <main className='home'>
      <div className="home__content">
        <h1 className='home__content__title'>Stay updated!</h1>
        <p className='home__content__text'>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li><img src={iconList} alt='Icon' /> Product discovery and building what matters</li>
          <li><img src={iconList} alt='Icon' /> Measuring to ensure updates are a success</li>
          <li><img src={iconList} alt='Icon' /> And much more!</li>
        </ul>

        <form
          className="form-newsletter"
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            if (validateEmail(email)) {
              navigate('/success')
            }
          }}
        >
          <label htmlFor="email">Email address</label>
          <input
            className={invalid ? 'invalid' : ''}
            type="email"
            name="email"
            id="email"
            required
            placeholder="email@company.com"
            value={email}
            onChange={(e) => {
              onSetEmail(e.target.value);
              setInvalid(false)
            }}
          />
          <span
            id="erro-message-email"
            className={invalid ? 'invalid' : ''}
          >
            Valid email required
          </span>

          <button type="submit">Subscribe to monthly newsletter</button>

        </form>
      </div>

      <div className="img-container">
        <picture>
          <source media="(min-width: 48em)" srcSet={illustrationImg} />
          <img src={illustrationImgMobile} alt="illustration" />
        </picture>
      </div>
    </main>
  )
}