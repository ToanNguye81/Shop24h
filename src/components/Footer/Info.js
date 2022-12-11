
function Info() {
    return(
      <>
        <div className="col-sm-10 row mt-5 footer-info">
            <div className="col-sm-6">
              <div className="pr-xl-4">
                <p>
                  Hàng chuẩn auth 100%. Hoàn tiền 200% nếu phát hiện hàng giả.
                  Công nghệ đến từ Thụy Điển và Đan Mạch.
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
            <div className="col-sm-3">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>
                <a  href="dic:#">Phú Quang, Iahru, Gia Lai</a>
                </dd>
              </dl>
              <dl className="contact-list">
                <dt>email:</dt>
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
            <div className="col-sm-3">
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