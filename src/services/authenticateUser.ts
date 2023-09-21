import axios, { AxiosResponse, AxiosError } from 'axios';
import { UserType } from '../store/authStore';

const authenticateUser = async (email: string, password: string, login: (user: UserType, token: string) => void): 
Promise<void> => {
    try {
      
      // Define the API endpoint for signing in.
       const signInEndpoint = 'https://glamorous-tuna-lapel.cyclic.app/user/login';

      // Create a request payload with user credentials.
       const requestBody = {
        email: email,
        password: password,
      };
      
      // Make a POST request to the sign-in endpoint.
      const response: AxiosResponse = await axios.post(signInEndpoint, requestBody);
      // Check if the response indicates a successful sign-in.
      if (response.status === 200) {
        // console.log('Sign-in successful',response.data);
        // console.log('Access token:', response.data.accessToken);
        // You can store the access token or user data in your application's state or local storage.
        return login(response.data.user, response.data.accessToken);
      } else {
        console.error('Sign-in failed');
      }
    } catch (error:unknown) {
      // Handle any errors that occur during the sign-in process.
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response) {
        console.error('Sign-in error:', axiosError.response.status, axiosError.response.data);
      } else {
        console.error('Network error:', error.message);
      }
    } else {
        console.error('Error:', (error as Error).message);
      }
    }
  }

export default authenticateUser;