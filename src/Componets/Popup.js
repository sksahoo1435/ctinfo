import React from 'react'
import classes from './popup.module.css';
import close from '../Componets/close-icon.png';
import axios from 'axios';


const Popup = (props) => {

  const str = 'sunilkumarsahoo.official@gmail.com';
  let email = str.replace(/[^a-zA-Z0-9 ]/g, '');

  var desc = []

  axios.get('http://demo.api.admin.circlesnow.com/ProductRESTService.svc/getschedmsg',
    {
      headers: {
        token: email
      }
    }).then(res => desc.push(res))

  return (
    <>
      <div className={classes.container}>
        <div className={classes.model}>

          <div className={classes.head}>

            <div className={classes.desc}>
              Description
            </div>

            <div className={classes.closeImg}>
              <img src={close} onClick={() => props.closeDesc(false)} alt="close button" />
            </div>

          </div>

          <div className={classes.description}>
            <p>{props.description}</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Popup