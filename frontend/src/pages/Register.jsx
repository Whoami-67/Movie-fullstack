import Form from "../components/Form";
import "../styles/bg.css";

function Register() {
  return (
    <>
      <div className="bg"></div>
      <div>
        <Form
          route="api/user/register"
          method="register"
        />
      </div>
    </>
  );
}
export default Register;
