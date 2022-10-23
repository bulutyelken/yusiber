import React from 'react'
import "./QuestionCard.style.scss"
import {MdArrowDropDown} from "react-icons/md"

export default function QuestionCard(props) {
    return (
        <section className='section'>
            <h2>{props.question_number}/12</h2>
            <div className='maindiv'>
                <div className='texts'>
                    <h1>{props.header}</h1>
                    <p>{props.alt_header}</p>
                    <div className='buttons'>
                        <a href='/#'>PHISHING</a>
                        <a href='/#'>MEŞRU</a>
                    </div>
                </div>
                <div className='mail'>
                    <div className='mail_header'>
                        <div className='avatar'>
                            <span>{props.avatar }</span>
                        </div>
                        <div className='flex_column'>
                            <div>
                                <span className='sender'>{props.sender}</span>
                                <span className='sendermail'>&lt;{props.sender_mail}&gt;</span>
                            </div>
                            <div className='flex_row'>
                                <span className='bana'>bana</span>
                                <div className='arrowdiv'>
                                    <MdArrowDropDown color='black' />
                                </div>
                            </div>
                        </div>
                        <span className='saat'>{props.saat}</span>
                    </div>
                    <div className='content'>
                        mail icerigi
                    </div>
                </div>
            </div>
        </section>
    )
}
