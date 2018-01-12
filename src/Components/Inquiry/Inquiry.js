import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import InquiryForm from './inquiryForm'

const Inquiry = (props) => {
    return (
        <div>
        <Header />
        <InquiryForm />
        <Footer />
        </div>
    );
}

export default Inquiry;
