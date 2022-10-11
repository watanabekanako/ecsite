import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/register_user.module.css'
import React, { useEffect } from "react";

export const mailJudge = (mailStatus: any) => {
  if (mailStatus === "empty") {
    let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
    tag.style.display = "inline-block"
    tag.innerHTML = "メールアドレスを入力してください"
  }

  if (mailStatus === "format-incorrect") {
    let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
    tag.style.display = "inline-block"
    tag.innerHTML = "メールアドレスは@を含む形式で入力してください"
  }

  if (mailStatus === "registered") {
    let tag = document.getElementsByClassName("control-label")[1] as HTMLElement;
    tag.style.display = "inline-block"
    tag.innerHTML = "そのメールアドレスはすでに使われています"
  }

}

export const MailForm = (props: any) => {

    useEffect(() => {
      props.SetMailStatus("ok")

      if (!props.mailValue) {
        props.SetMailStatus("empty")
      } else if (!props.mailValue.includes('@')) {
        props.SetMailStatus("format-incorrect")
      } else {
        fetch(`http://localhost:8000/users?mail=${props.mailValue}`)
          .then(response => response.json())
          .then((data) => {
            if (data.length !== 0) {
              props.SetMailStatus("registered")
            }
          })
          .catch(error => {
            console.log('error');
          });
      }
    })


  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="mailForm"  >
        <label htmlFor="inputEmail" className={styles.title}>メールアドレス</label>
        <label
          id="ErrorInputEmail"
          className="control-label"
          style={{
            color: "red",
            display: "none"
          }}
          htmlFor="inputError"
        >メールアドレスを入力してください</label>
        <input
          type="text"
          id="inputEmail"
          className="form-control form-control-lg "
          placeholder="例）xxx@example.com"
          onChange={(ev) => {
              props.SetMailValue(ev.target.value);
          }}
        />
      </div>
    </>
  );
}

export default MailForm;
