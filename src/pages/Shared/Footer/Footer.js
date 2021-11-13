import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid">
            <div className='row' style={{ backgroundColor: '#191a42', color: 'white' }}>
                <div className='py-5 col-md-5'>
                    <h3>Imperial Cars</h3>
                    <p>There are many companies in the world that have a long history and treasure old traditions. Our history starts today, but we can assure you that it is commensurate with centuries of traditions</p>
                </div>
                <div className='py-5 col-md-3' style={{ color: '#fec601' }}>
                    <h3>Contract</h3>
                    <p><i class="fas fa-envelope"></i> sales@imperial-rac.com</p>
                    <p><i class="fas fa-phone"></i> +97142775981</p>
                    <p><i class="fas fa-fax"></i> +97142776012</p>
                    <p><i class="fas fa-map-marker-alt"></i> Agrabad,chattogram</p>
                    <p></p>
                </div>
                <div className='py-5 col-md-4'>
                    <h3>More</h3>
                    <p>Service & Repairs</p>
                    <p>FAQ & Support</p>
                    <p>Research Articles</p>
                    <p>Warranties & MaxCare®</p>
                </div>
                <p className='text-center'>© COPYRIGHT 2014 - 2021 IMPERIAL PREMIUM RENT A CAR. ALL RIGHTS RESERVED. POWERED BY IMPERIAL MEDIA</p>
            </div>
        </div>
    );
};

export default Footer;