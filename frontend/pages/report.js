import Head from "next/head";
import Header from "../components/header.js";
import styles from "@/styles/Home.module.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ExclamationCircleOutlined} from "@ant-design/icons";

export default function Report() {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Send');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const notify = () => {
      toast("✨ Sent successfully! ✨", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zthu15j', 'template_m34kp7i', form.current, {
        publicKey: 'IbeNzC60qkqb7gPdi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setButtonText('Sent');
          setIsButtonDisabled(true);
          notify();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <Head>
        <title>Report</title>
        <meta name="description" content="Report Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.main} id={styles.reportbg}>
        <Header />
        <div style={{margin:"20px", padding:"1rem", background:"white", borderRadius:"0.3rem",  width:"50%"}}>
          <div style={{textAlign:"center", fontSize:"24px"}}>
            <h2>Help Forum</h2> 
          </div>
          <div className={styles.reportContent}>
            <div style={{margin:"10px"}}>
              <div style={{width:"100%"}}>
                <p style={{marginBottom:"20px", fontSize:"20px"}}>
                  If you found scam address or have issues, please write us!</p>
                
                <div className={styles.reportAlert}>
                  <ExclamationCircleOutlined style={{ fontSize: "16px", color: '#1E1E1E', marginBottom:"15px"}} />
                  <p>Once you submit the form, the submit button will disabled. 
                    We recommend sending everything at once or reloading the page and sending a new one.</p>
                </div>
                </div>

              <form className={styles.formContent} ref={form} onSubmit={sendEmail}>
                <label className={styles.formLabel}>Name</label>
                <input className={styles.formInput} type="text" name="user_name" />
                <label className={styles.formLabel}>Email</label>
                <input className={styles.formInput} type="email" name="user_email" required />
                <label className={styles.formLabel}>Scam Address</label>
                <input className={styles.formInput} type="text" placeholder="0x...." name="scam_address" />
                <label className={styles.formLabel}>Issue:</label>
                <textarea className={styles.formTextArea} name="message" />
                <input className={styles.formSubmitInput} type="submit" value={buttonText} disabled={isButtonDisabled} />
                <ToastContainer />
              </form>

            </div>
          </div>      
        </div>
      </section>   
    </>
  );
}

