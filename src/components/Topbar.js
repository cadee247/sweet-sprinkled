import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div
      className="container-fluid top-bar bg-dark text-light px-0 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="row gx-0 align-items-center d-none d-lg-flex">
        {/* Left side - Breadcrumb links */}
        <div className="col-lg-6 px-5 text-start">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link className="small text-light" to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link className="small text-light" to="/career">Career</Link>
            </li>
            <li className="breadcrumb-item">
              <Link className="small text-light" to="/terms">Terms</Link>
            </li>
            <li className="breadcrumb-item">
              <Link className="small text-light" to="/privacy">Privacy</Link>
            </li>
          </ol>
        </div>

        {/* Right side - Social links */}
        <div className="col-lg-6 px-5 text-end">
          <small>Follow us:</small>
          <div className="h-100 d-inline-flex align-items-center">
            <a className="btn-lg-square text-primary border-end rounded-0" href="#"><i className="fab fa-facebook-f"></i></a>
            <a className="btn-lg-square text-primary border-end rounded-0" href="#"><i className="fab fa-twitter"></i></a>
            <a className="btn-lg-square text-primary border-end rounded-0" href="#"><i className="fab fa-linkedin-in"></i></a>
            <a className="btn-lg-square text-primary pe-0" href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
