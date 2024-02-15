// Write your code here
import './index.css'
const Login = props => {
  const {login} = props
  return (
    <button type="button" className="login-button" onClick={login}>
      LogIn
    </button>
  )
}
export default Login
