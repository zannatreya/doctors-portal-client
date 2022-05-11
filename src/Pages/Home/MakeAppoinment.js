import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appoinment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }}
            className='flex justify-center items-center mt-28'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-primary text-xl font-bold mb-4'>Appoinment</h3>
                <h2 className='text-3xl text-white mb-8 py-5'>Make an Appoinment Today</h2>
                <p className='text-white mb-10 pb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eius nihil, aspernatur amet adipisci quam, ad sit esse excepturi qui tenetur ipsum libero saepe dicta aperiam facilis, consequuntur corporis natus blanditiis vel itaque. Nobis fugiat culpa eius praesentium possimus magnam</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;