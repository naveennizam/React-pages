import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg px-5 mb-5 navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Home</Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">

              <Link to="/blogs" className="navbar-brand">Blogs</Link>
            </li>
            <li className="nav-item">

              <Link to="/contact" className="navbar-brand">Contact</Link>
            </li>

            <li className="nav-item">

              <Link to="/nopage" className="navbar-brand">NoPage</Link>
            </li>
            
<<<<<<< HEAD
=======
           

>>>>>>> 75adfdc8963e828cc8fb3842278253309705ee13
          </ul>

        </div>

      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
