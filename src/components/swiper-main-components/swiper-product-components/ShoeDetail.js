import React from 'react';

const ShoeDetail = () => {
    return (
        <>
        <div id='product-slide-3-left'>
            <div id='product-slide-3-temp-img'>here will be an exploded view of the structure of the shoe</div>
        </div>
        <div id='product-slide-3-right'>
        <div id='product-slide-3-copy'>
                <h2>How it works</h2>
                <ul>
                    <li>
                        <div className='product-slide-3-list-item'>
                            <p>(1) splitting the difference</p>
                            <p>we chose a mid-ankle height to allow for adequate dorsiflexion of the ankle while still providing lateral ankle support</p>
                        </div>
                    </li>
                    <li>
                        <div className='product-slide-3-list-item'>
                            <p>(2) liftoff</p>
                            <p>a subtle lift in the heel assists in achieving proper forward tracking of the knee to make up for any ankle mobility deficits you may be experiencing</p>
                        </div>
                    </li>
                    <li>
                        <div className='product-slide-3-list-item'>
                            <p>(3) turn up</p>
                            <p>our sturdy insole is designed to encourage a subtle supination of the ankle in order to cue proper lateral tracking of the knee during demanding compound barbell movements</p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
        </>
    );
};

export default ShoeDetail;