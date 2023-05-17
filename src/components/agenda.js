import React from 'react';
import {agendaData} from './agendaData';

const Agenda = () => {
    return (
        <section className="agenda" id='agenda'>
            <div className="container">
                <div className='sec-title'>
                    <h3>Agenda</h3>
                </div> 
                <div className="row">
                    <div className="list">
                        <ul>
                            {agendaData.map((item, index)=>{
                                console.log(item)
                                return (
                                    <li key={index}>
                                        <h4>{item.time}</h4>
                                        <p>{item.discription}</p>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Agenda;
