import { useState } from 'react'
import './App.css'
import emailjs from '@emailjs/browser'

function App() {
    
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('code', 'code', e.target, 'code');
    }
 return(
     <div className="App">
         <h1 className="pageTitle">Email test!</h1>
         <form className="contactform" onSubmit={sendEmail}>
             <label htmlFor="emailFrom">Email From:</label>
             <input type="text" id="emailFrom" name="emailFrom" className="emailFrom"/>
             <label htmlFor="message">Message:</label>
             <textarea name="message" id="message" className="messageBox"></textarea>
             <button type="submit" variant="contained" className="submit">Submit</button>
         </form>
     </div>
 )
}

export default App
