import styles from './Footer.module.css';
import Login from '@components/Login';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Login />
      </footer>
    </>
  )
};

export default Footer;
