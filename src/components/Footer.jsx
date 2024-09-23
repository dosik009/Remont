import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Логотип и описание */}
        <div style={styles.column}>
          <h3 style={styles.logo}>RemontPro</h3>
          <p style={styles.description}>
            Профессиональный ремонт квартир, домов и офисов. Гарантия качества и внимание к деталям.
          </p>
        </div>
        
        {/* Навигация */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Навигация</h4>
          <ul style={styles.list}>
            <li><a style={styles.link} href="#services">Услуги</a></li>
            <li><a style={styles.link} href="#projects">Проекты</a></li>
            <li><a style={styles.link} href="#about">О нас</a></li>
            <li><a style={styles.link} href="#contact">Контакты</a></li>
          </ul>
        </div>

        {/* Контакты */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Контакты</h4>
          <p style={styles.contact}>Телефон: +7 (123) 456-78-90</p>
          <p style={styles.contact}>Email: info@remontpro.com</p>
          <p style={styles.contact}>Адрес:Алматы, ул. Ленина, д. 10</p>
        </div>

        {/* Социальные сети */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Мы в соцсетях</h4>
          <div style={styles.socials}>
            <a style={styles.socialLink} href="#">Instagram</a>
            <a style={styles.socialLink} href="#">VK</a>
            <a style={styles.socialLink} href="#">Facebook</a>
          </div>
        </div>
      </div>
      <div style={styles.bottomFooter}>
        <p style={styles.bottomText}>© 2024 RemontPro. Все права защищены.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '40px 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  column: {
    flex: '1',
    margin: '0 20px',
    minWidth: '200px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  description: {
    lineHeight: '1.6',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '15px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginBottom: '10px',
    display: 'block',
  },
  contact: {
    lineHeight: '1.6',
  },
  socials: {
    display: 'flex',
    flexDirection: 'column',
  },
  socialLink: {
    color: '#fff',
    textDecoration: 'none',
    marginBottom: '10px',
  },
  bottomFooter: {
    textAlign: 'center',
    borderTop: '1px solid #444',
    paddingTop: '20px',
    marginTop: '20px',
  },
  bottomText: {
    fontSize: '14px',
    color: '#aaa',
  },
};

export default Footer;