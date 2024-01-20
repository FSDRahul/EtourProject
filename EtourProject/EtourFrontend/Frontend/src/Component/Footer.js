import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <h2>TourIndia Travels Pvt Ltd .</h2>
            <h6>H.O: 111 L.J.Road, Dadar, Mumbai 400028</h6>
            <h6>Tel.: (+91 22)  1234 5678</h6>


            <p>© 2023 Your Company. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem',
    },
};

export default Footer;