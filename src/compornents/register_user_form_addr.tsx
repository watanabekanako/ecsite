import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/register_user.module.css'
import React, { useEffect } from "react";

export const addrJudge = (addrStatus: any) => {
  if (addrStatus === "empty") {
    let tag = document.getElementsByClassName("control-label")[3] as HTMLElement;
    tag.style.display = "inline-block"
    tag.innerHTML = "住所を入力してください"
  }
}

export const AddrForm = (props: any) => {

    useEffect(() => {
      props.SetAddrStatus("ok")

      if (!props.addrValue) {
        props.SetAddrStatus("empty")
      }
    })


  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="addrForm"  >
        <label htmlFor="inputAddrcode" className={styles.title}>住所</label>
        <label
          id="ErrorInputAddrcode"
          className="control-label"
          style={{
            color: "red",
            display: "none"
          }}
          htmlFor="inputError"
        >住所を入力してください</label>
        <input
          type="text"
          id="inputAddress"
          className="form-control form-control-lg "
          placeholder="住所"
          onChange={(ev) => {
              props.SetAddrValue(ev.target.value);
          }}
        />
      </div>
    </>
  );
}

export default AddrForm;
