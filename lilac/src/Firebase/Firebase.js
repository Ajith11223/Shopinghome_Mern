import { GoogleLogin } from '@react-oauth/google';

const client = new OAuth2Client("572559618246-c7c7eo18rgj40uvardjue8j5dp6obuer.apps.googleusercontent.com");


function Google(){
    <GoogleLogin
    onSuccess={credentialResponse => {
      responseGoogle(credentialResponse.credential);
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />
}