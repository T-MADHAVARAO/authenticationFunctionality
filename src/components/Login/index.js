import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

// Write your JS code here
const Login = props => {
  const onSuccessLogin = async () => {
    const jwtToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y'
    const {history} = props
    history.replace('/')
    Cookies.set('jwt_token', jwtToken, {expires: 30})
  }
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="bg">
      <h1>Please Login</h1>
      <button type="button" onClick={onSuccessLogin}>
        Login With Sample Creds
      </button>
    </div>
  )
}

export default Login
