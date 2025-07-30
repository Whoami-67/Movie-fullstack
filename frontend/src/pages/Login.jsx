import Form from "../components/Form";
import "../styles/bg.css";


function Login() {
  return (
    <>
      <div className="bg"></div>
      <div>
        <Form
          route="api/token/"
          method="login"
        />
        
      </div>
    </>
  );
}
export default Login;
