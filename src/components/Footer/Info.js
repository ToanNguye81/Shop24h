
function Info() {
    return(
      <>
        <div className="col-sm-9 row mt-5 footer-info">
            <div className="col-sm-6">
              <div className="pr-xl-4">
                <p>
                100% authentic auth. 200% refund if found fake. Technology comes from Sweden and Denmark.
                </p>
                <p className="">
                  <span>©&nbsp; </span>
                  <span className="copyright-year">2018</span>
                  <span>&nbsp;</span>
                  <span>.&nbsp;</span>
                  <span>All Rights Reserved.</span>
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <label>Address:</label>
                <dd>
                <a  href="dic:#">Phú Quang, Iahru, Gia Lai</a>
                </dd>
              </dl>
              <dl className="contact-list">
                <label>email:</label>
                <dd>
                  <a href="mailto:#">toannguyen@gmail.com</a>
                </dd>
              </dl>
              <dl className="contact-list">
                <dt>phones:</dt>
                <dd className="d-flex">
                  <a href="tel:#">+91 99999999</a>
                </dd>
              </dl>
            </div>
            <div className="col-sm-2">
              <h5>Links</h5>
              <ul className="nav-list">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#contacts">Contacts</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
              </ul>
            </div>
        </div>
      </>
    )
}
export default Info