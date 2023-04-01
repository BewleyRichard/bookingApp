/* This component returns some JSX elements representing a form for users to sign up for email newsletters. 
The form includes an email input field and a subscribe button. It may be used for users to sign up to an email client.
it is non functional in this project. */

import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
        
      </div>
    </div>
  )
}

export default MailList