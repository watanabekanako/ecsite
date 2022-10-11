import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/register_user.module.css'
import React, { useEffect } from "react";
import PassForm from "./register_user_form_pass";

export const conPassJudge = (conPassStatus: any, passValue: any, conPassValue: any) => {

  if (conPassStatus === "empty") {
    let tag = document.getElementsByClassName("control-label")[6] as HTMLElement;
    tag.style.display = " inline-block"
    tag.innerHTML = "確認用パスワードを入力してください"
  } else {
    if (passValue !== conPassValue) {
      let tag = document.getElementsByClassName("control-label")[6] as HTMLElement;
      tag.style.display = "inline-block"
      tag.innerHTML = "パスワードと確認用パスワードが不一致です"
    }
  }

}

export const ConPassForm = (props: any) => {

    useEffect(() => {
      props.SetConPassStatus("ok")
      if (!props.conPassValue) {
        props.SetConPassStatus("empty")
      }
    })


  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="conPassForm" >
        <label htmlFor="inputConfirmationPassword" className={styles.title}>確認用パスワード</label>
        <label
          id="ErrorInputConfirmationPassword"
          className="control-label"
          style={{
            color: "red",
            display: "none"
          }}
          htmlFor="inputError"
        >確認用パスワードを入力してください</label>
        <input
          type="password"
          autoComplete="new-password"
          id="inputConfirmationPassword"
          className="form-control form-control-lg "
          placeholder="確認用パスワード"
          onChange={(ev) => {
              props.SetConPassValue(ev.target.value);
          }}
        />
      </div>
    </>
  );
}

export default PassForm;
