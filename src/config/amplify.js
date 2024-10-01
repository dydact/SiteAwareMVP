import { Amplify } from 'aws-amplify'

Amplify.configure({
  Auth: {
    region: import.meta.env.VITE_AWS_REGION,
    userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_WEB_CLIENT_ID,
    oauth: {
      domain: import.meta.env.VITE_COGNITO_DOMAIN,
      scope: ['openid', 'email', 'profile'],
      redirectSignIn: import.meta.env.VITE_REDIRECT_SIGN_IN,
      redirectSignOut: import.meta.env.VITE_REDIRECT_SIGN_OUT,
      responseType: 'code'
    }
  },
  API: {
    endpoints: [
      {
        name: 'api',
        endpoint: import.meta.env.VITE_API_ENDPOINT,
        region: import.meta.env.VITE_AWS_REGION
      },
    ]
  },
  Analytics: {
    AWSKinesis: {
      region: import.meta.env.VITE_AWS_REGION,
      bufferSize: 1000,
      flushSize: 100,
      flushInterval: 5000, // 5 seconds
      resendLimit: 5
    }
  }
})