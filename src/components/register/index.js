const Register = () =>     <div className="container tm-mt-big tm-mb-big">
<div className="row">
  <div className="col-12 mx-auto tm-login-col">
    <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="tm-block-title mb-4">Register Here!</h2>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12">
          <form action="registrationserv" method="post" className="tm-login-form">
            
            <div className="form-group">
              <label htmlFor="username">Full Name</label>
              <input
                name="name" type="text" className="form-control validate" id="name"   required />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                name="uname" id="uname" type="text" className="form-control validate" required />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input
                name="passw" id="passw" type="password"  className="form-control validate" id="password" required/>
            </div>
            <div className="form-group mt-4">
              <button
                type="submit"
                className="btn btn-primary btn-block text-uppercase"
              >
                Register
              </button>
            </div>
            <a href="index.jsp"className="mt-5 btn btn-primary btn-block text-uppercase">
              Already Registered? Login Here!
            </a>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

export default Register;