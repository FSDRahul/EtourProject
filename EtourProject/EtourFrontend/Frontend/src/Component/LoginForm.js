import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap'; // Import Form.Check component and Col

function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/customer_master/login', {
        params: { username, password }
        
      });
      if (response.data === '') {
        alert('No user found. Please Enter Valid Credential.');
      }
      else {
        alert("!!! User Logged In successfully !!!")
        sessionStorage.setItem("uid", response.data);
        navigate("/Home")
      }
    } catch (error) {
      alert('Login failed:', error.response ? error.response.data : error.message);
    }

  };

 // alert(localStorage.getItem("uid"));

  return (
    
    // <div className='logincss'>
    //   <table>
    //     <tr>
    //     <td>Username :</td>
    //       <td><input
    //     type="text"
    //     placeholder="Username"
    //     value={username}
    //     onChange={handleUsernameChange}
    //   /></td>
    //     </tr>
    //     <tr>
    //       <td>Password :</td>
    //       <td>
    //       <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={handlePasswordChange}
    //   />
    //       </td>
    //     </tr>
    //     <tr>
    //       <td>
    //       <Button variant="primary" onClick={handleSubmit}>
    //                         Login
    //     </Button>
    //       </td>
    //       <td>
    //       <Button variant="primary" onClick={() =>  navigate(`/Registration`)}>
    //                         Go To Registration
    //     </Button>
    //       </td>
    //     </tr>
    //     </table>
      
      
      
    // </div>
    <div className='logincss'>
    <table>
      <tr>
        <td style={{ fontWeight: 'bold', fontSize: '16px', paddingRight: '10px' }}>Username :</td>
        <td>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold', fontSize: '16px', paddingRight: '10px' }}>Password :</td>
        <td>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </td>
      </tr>
      <tr>
        <td>
          <Button variant="primary" onClick={handleSubmit}>
            Login
          </Button>
        </td>
        <td>
          <Button variant="primary" onClick={() => navigate(`/Registration`)}>
            Go To Registration
          </Button>
        </td>
      </tr>
    </table>
  </div>
  );
}

export default LoginForm;