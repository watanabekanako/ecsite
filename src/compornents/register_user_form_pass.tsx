import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/register_user.module.css'
import React, { useEffect } from "react";

export const passJudge = (passStatus: any) => {
  if (passStatus === "empty") {
    let tag = document.getElementsByClassName("control-label")[5] as HTMLElement;
    tag.style.display = "inline-block"
    tag.innerHTML = "パスワードを入力してください"
  }

  if (passStatus === "pass-incorrect") {
    let tag = document.getElementsByClassName("control-label")[5] as HTMLElement;
    tag.style.display = "inline-block"
    tag.innerHTML = "パスワードは８文字以上１６文字以内で設定してください"
  }
}

export const PassForm = (props: any) => {

    useEffect(() => {
      props.SetPassStatus("ok")
      if (!props.passValue) {
        props.SetPassStatus("empty")
      } else {
        if (!(props.passValue.length <= 16 && props.passValue.length >= 8)) {
          props.SetPassStatus("pass-incorrect")
        }
      }
    })

  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="passForm"  >
        <label htmlFor="inputPassword" className={styles.title}>パスワード</label>
        <label
          id="ErrorInputPassword"
          className="control-label"
          style={{
            color: "red",
            display: "none"
          }}
          htmlFor="inputError"
        >パスワードを入力してください</label>
        <input
          type="password"
          autoComplete="current-password"
          id="inputPassword"
          className="form-control form-control-lg "
          placeholder="８文字以上１６文字以内で設定してください"
          onChange={(ev) => {
              props.SetPassValue(ev.target.value);
          }}
        />
      </div>
    </>
  );
}

export default PassForm;
