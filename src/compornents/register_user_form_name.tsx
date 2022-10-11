import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/register_user.module.css'
import React, { useEffect } from "react";

export const nameJudge = (nameStatus: any) => {
  if (nameStatus === "empty") {
    let tag = document.getElementsByClassName("control-label")[0] as HTMLElement;
    tag.style.display = "inline-block"
    tag.innerHTML = "名前を入力してください"
  }
}

export const NameForm = (props: any) => {

    useEffect(() => {
      props.SetNameStatus("ok")
      if (!props.firstNameValue || !props.lastNameValue) {
        props.SetNameStatus("empty")
      }
    })
 

  return (
    <>
      <div className={`form-group ${styles.formGroup}`} key="nameForm" >
        <label htmlFor="inputLastName" className={styles.title}>名前</label>
        <label
          id="Name"
          className="control-label"
          style={{
            color: "red",
            display: "none"
          }}
          htmlFor="inputError"
        >名前を入力してください</label>
        <div className="row">
          <div className="col-sm-6">
            <input
              type="text"
              id="inputLastName"
              className="form-control form-control-lg "
              placeholder="姓"
              onChange={(ev) => {
                if (props.test === "true") {
                  props.SetLastNameValue(ev.target.value)
                }
              }}
            />
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              id="inputFirstName"
              className="form-control form-control-lg "
              placeholder="名"
              onChange={(ev) => {
                  props.SetFirstNameValue(ev.target.value);
              }}
            />
          </div>
        </div>
      </ div>
    </>
  );
}

export default NameForm;
