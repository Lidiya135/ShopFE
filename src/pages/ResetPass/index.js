import React from 'react'
import { Link,} from 'react-router-dom'
import styles from './Reset.module.css'
import Logo from '../../components/Logo'
import "@fontsource/metropolis"

export default function ResetPass() {

  return (
    <div>
      <section className={styles.containerReset}>
          <div className={styles.content}>
            <div className={styles.title}>
              <div className={styles.logo}>
                <Logo title="Belanja" link="/home" />
              </div>
            </div>
            <h4>Reset Password</h4>
            <form  className="container mt-5 col-12 text-center">
                  <input type="email" className="form-control mb-5"  placeholder="email"/>
                  <button type='submit' className='btn btn-danger col-9'>Primary</button>
            </form>
            <div className={styles.register}>
                <p>
                    Don't have a Belanja account? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    </section>
  </div>
  )
}