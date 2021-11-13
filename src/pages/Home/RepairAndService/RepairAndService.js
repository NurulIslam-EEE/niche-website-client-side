import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const RepairAndService = () => {
    return (
        <div className='m-0'>

            <h2 className="text-center">Repair and Service</h2>
            <div className="m-0 row">
                <div className="p-5 mt-5 col-md-6 w-70">
                    <h2>Service Options Offered by Imperial Cars</h2>
                    <h5>Repairs and maintenance to help keep your car running smoothly</h5>
                </div>
                <div className="col-md-6">
                    <img className='p-4 text-center w-100' src="https://www.carmax.com/home/images/service/servicing-options-color-block.jpg" alt="" />
                </div>
            </div>
            <div className="m-0 my-4 row">
                <h1 className='text-center'>Imperial Cars customers get
                    great benefits!</h1>
                <div className="text-center col-md-4 service-card">
                    <div>
                        <img className='text-center' src="https://www.carmax.com/home/images/service/locations.png" alt="" />
                    </div>
                    <h3>Nationwide locations</h3>
                    <p>We've partnered with RepairPal to provide you even more options when and where you need service.</p>
                </div>
                <div className="text-center col-md-4 service-card">
                    <div>
                        <img src="https://www.carmax.com/home/images/service/guaranteed-repairs.png" alt="" />
                    </div>
                    <h3>Guaranteed repairs</h3>
                    <p>Backed by a minimum 12,000-mile/12-month (whichever comes first) limited warranty for qualifying repairs.*</p>
                </div>
                <div className="text-center col-md-4 service-card">
                    <div>
                        <img src="https://www.carmax.com/home/images/service/reduced-deductible.png" alt="" />
                    </div>
                    <h3>$50 reduced deductible**</h3>
                    <p>A special benefit for our MaxCare® customers that applies to both CarMax Service Center® and RepairPal Certified® Shops.</p>
                </div>
            </div>

        </div>

    );
};

export default RepairAndService;