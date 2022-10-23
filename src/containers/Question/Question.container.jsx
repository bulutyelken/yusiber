import React from 'react'
import "./Question.style.scss"
import QuestionCard from '../../components/QuestionCard/QuestionCard'


export default function Question() {
  
  return (
    <section id='section'>
        <div className='main' >
            <QuestionCard question_number={1} 
                          header={"Hay aksi, depolama alanınızın bittiği anlaşılıyor!"} 
                          alt_header={"Yeni sürüme geçmenin maliyetini merak ediyorum."}
                          sender={"Dropbox"}  
                          avatar={"D"} 
                          sender_mail={"no-reply@dropboxmail.com"} 
                          saat={"12:42"}
                          />
        </div>
    </section>
  )
}
