import { Formik } from 'formik';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const submitData = (values) => {
        console.log("values", values)
        axios.post('https://jsonplaceholder.typicode.com/posts', values)
        .then(response => {
            // redirect to dashboard component
            alert("Submitted successfully")
            goToHome();
        })
        .catch(error => {
            console.error(error);
        });
    }

    const goToHome = () => {
        navigate("/home");
    }

return (
    <>
  <div className="container tm-mt-big tm-mb-big">
  <div className="row">
    <div className="col-12 mx-auto tm-login-col">
      <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="tm-block-title mb-4">Welcome to Doctor-Base, Login</h2>
          </div>
        </div>
        <Formik
            initialValues={{ username: '', password: '' }}
            validate={values => {
            const errors = {};
            if (!values.username) {
                errors.username = 'Required';
            } 
            if(!values.password){
                errors.password = 'Required';
            }
            return errors;
            }}
            onSubmit={(values) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                submitData(values);
            }, 400);
            }}
        >
            {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
            }) => (
                <div className="row mt-2">
          <div className="col-12">
            <form onSubmit={handleSubmit} className="tm-login-form">
              <div className="form-group">
                <label for="username">Username</label>
                <input
                type="username"
                name="username"
                id="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                className="form-control validate"
                onError={touched.username && errors.username}
                />
                <span>{errors.username && touched.username && errors.username}</span>
              </div>
              <div className="form-group mt-3">
                <label for="password">Password</label>
                <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="form-control validate"
                />
                <span>{errors.password && touched.password && errors.password}</span>
              </div>
              <div className="form-group mt-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-block text-uppercase"
                >
                  Login
                </button>
              </div>
              <a href="register.jsp" className="mt-5 btn btn-primary btn-block text-uppercase">
                New User? Register First!
              </a>
            </form>
          </div>
        </div>
        )}
        </Formik>
      </div>
    </div>
  </div>
</div>
</>
);

}


// import { useState } from "react";

// export default function Login() {
//   const [formData, setFormData] = useState({name: "",email: "",message: ""});

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
//     );
// };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlhtmlFor="name">Name:</label>
//       <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

//       <label htmlhtmlFor="email">Email:</label>
//       <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

//       <label htmlhtmlFor="message">Message:</label>
//       <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }
