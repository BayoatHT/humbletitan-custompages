import React from 'react';  
import { Link } from 'react-router-dom';
import './styles.css'

const CustomPagesList = () => {
    return (
        <div className="container container-y w-full">
            <h2 className="text-40 mt-2 text-center text-blue">
                Select a Table Name to Make a New Page 
            </h2>
            <div className="flex mt-4 wrap justify-between  row-gap-4">
                <Link to='CompanyProfile' className="col-4 pt-5 pb-5  text-center border-rad-8 bg-light-blue">
                    <h4 className='ls-1-1 text-20 text-blue'>Company Profile</h4>
                </Link>
               {/*  <Link to='SharesFloat' className="col-4 pt-5 pb-5  text-center border-rad-8 bg-light-blue">
                    <h4 className='ls-1-1 text-20 text-blue'>Shares Float</h4>
                </Link> */}
                <Link to='FinancialRatios' className="col-4 pt-5 pb-5  text-center border-rad-8 bg-light-blue">
                    <h4 className='ls-1-1 text-20 text-blue'>Financial Ratios TTM</h4>
                </Link>
                <Link to='KeyMetrics' className="col-4 pt-5 pb-5  text-center border-rad-8 bg-light-blue">
                    <h4 className='ls-1-1 text-20 text-blue'>Key Metrics TTM </h4>
                </Link>
               {/*  <Link to='Ratings' className="col-4 pt-5 pb-5  text-center border-rad-8 bg-light-blue">
                    <h4 className='ls-1-1 text-20 text-blue'>Ratings</h4>
                </Link> */}
                <Link to='RealTimeQuotes' className="col-4 pt-5 pb-5  text-center border-rad-8 bg-light-blue">
                    <h4 className='ls-1-1 text-20 text-blue'>Real Time Quotes </h4>
                </Link>
                <Link to='FinancialGrowth' className="col-4 pt-5 pb-5  text-center border-rad-8 bg-light-blue">
                    <h4 className='ls-1-1 text-20 text-blue'>Financial Growth ANN </h4>
                </Link>
            </div>
        </div>
    )
};

export default CustomPagesList;
