import Head from 'next/head';
import { Nav } from '../../compornents/nav_format';
import { Title } from '../../compornents/register_user';
import styles from '../../styles/common.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  NameForm,
  nameJudge,
} from '../../compornents/register_user_form_name';
import {
  MailForm,
  mailJudge,
} from '../../compornents/register_user_form_mail';
import {
  ZipForm,
  zipJudge,
} from '../../compornents/register_user_form_zip';
import {
  AddrForm,
  addrJudge,
} from '../../compornents/register_user_form_addr';
import {
  TelForm,
  telJudge,
} from '../../compornents/register_user_form_tel';
import {
  PassForm,
  passJudge,
} from '../../compornents/register_user_form_pass';
import {
  ConPassForm,
  conPassJudge,
} from '../../compornents/register_user_form_conPass';

export const Show = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ブランド
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#Navber"
            aria-controls="Navber"
            aria-expanded="false"
            aria-label="ナビゲーションの切替"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="Navber">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  ホーム
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  リンク
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container bg-primary">
        <h1>Hello World!</h1>
      </div>
      <div className="container-md bg-secondary">
        <h1>Hello World!</h1>
      </div>
      <div className="container-fluid bg-success">
        <h1>Hello World!</h1>
      </div>

      <div className="container">
        <div className="row bg-secondary">
          <p>a</p>
          <div className="col ">
            <input type="text" className="col bg-primary" />
          </div>
          <div className="col ">
            <input type="text" />
          </div>
        </div>
      </div>

      {/* <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div className="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div className="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div className="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div className="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div className="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div className="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
<div className="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
<div className="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>

<div className="btn-group">
  <button type="button" className="btn btn-danger">Action</button>
  <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossOrigin="anonymous"></script> */}
      {/* <Head>
        <title>ラクラクヌードル／登録情報</title>
        <link rel="icon" href="/3506.png" />
      </Head>

      <Nav name = ""/>
      <div classNameName={`row ${styles.row}`}>
          <div
            classNameName="col-lg-offset-3 col-lg-5 col-md-offset-2 col-md-8 col-sm-10 col-xs-12"
          >
            <Title title="　登録情報" />

            <NameForm
              test = "false"
            />
            <MailForm
              SetMailValue="{SetMailValue}"
              SetMailFlag="{SetMailFlag}"
              mailValue="{mailValue}"
            />
            <ZipForm
              SetZipFlag="{SetZipFlag}"
              SetZipValue="{SetZipValue}"
              zipValue=""
              zipFlag="{zipFlag}"
            />
            <AddrForm
              SetAddrFlag="{SetAddrFlag}"
              SetAddrValue="{SetAddrValue}"
              addrValue="{addrValue}"
            />
            <TelForm
              SetTelValue="{SetTelValue}"
              SetTelFlag="{SetTelFlag}"
              telValue="{telValue}"
            />
            <PassForm
              SetPassFlag="{SetPassFlag}"
              SetPassValue="{SetPassValue}"
              passValue="{passValue}"
            />
            <ConPassForm
              SetConPassFlag="{SetConPassFlag}"
              SetConPassValue="{SetConPassValue}"
              conPassValue="{conPassValue}"
              />
          </div>
      </div> */}

      {/* 
          </div> */}
    </>
  );
};

export default Show;
