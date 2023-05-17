import React from 'react';
import Item1 from '../assets/images/item1.jpg';
import Item2 from '../assets/images/item2.jpg';
import Item3 from '../assets/images/item3.jpg';

const Message = () => {
    return (
        <section className="message" id='key'>
            <div className="container">
                <div className='sec-title'>
                    <h3>Key Messages</h3>
                </div> 
                <div className="row">
                    <div className="col-md-4">
                        <div className='message-item'>
                            <div className='image'>
                                <img src={Item1} alt='Message Image'></img>
                            </div>
                            <div className='content'>
                                <p>Hub71 is leading the growth of technology entrepreneurship to support Abu Dhabi’s economy</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='message-item'>
                            <div className='image'>
                                <img src={Item2} alt='Message Image'></img>
                            </div>
                            <div className='content'>
                                <p>Hub71 is leading the growth of technology entrepreneurship to support Abu Dhabi’s economy</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='message-item'>
                            <div className='image'>
                                <img src={Item3} alt='Message Image'></img>
                            </div>
                            <div className='content'>
                                <p>Hub71 is leading the growth of technology entrepreneurship to support Abu Dhabi’s economy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Message;
