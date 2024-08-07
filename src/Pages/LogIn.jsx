// import React, { useState } from 'react';
// import { useNavigate, useLocation, Link } from 'react-router-dom';

// const LogIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { from } = location.state || { from: { pathname: '/' } };
  
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://reqres.in/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//       });
//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         navigate(from.pathname || '/', { replace: true });
//       } else {
//         setError(data.error);
//       }
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://reqres.in/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setIsRegistering(false);
//       } else {
//         setError(data.error);
//       }
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   const isAuthenticated = !!localStorage.getItem('token');

//   return (
//     <>
//       <header className="header" style={{ borderBottom: '1px solid black' }}>
//         <h1 className="header-title">Movies Library</h1>
//         <nav className="header-nav">
//           <Link className="nav-link" to="/">Home</Link>
//           {isAuthenticated ? (
//             <button onClick={handleLogout} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Log Out</button>
//           ) : (
//             <Link className="nav-link" to="/login">Log In</Link>
//           )}
//         </nav>
//       </header>
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 60px)', padding: '20px' }}>
//         <form
//           onSubmit={isRegistering ? handleRegister : handleLogin}
//           style={{ display: 'flex', flexDirection: 'column', width: '300px', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}
//         >
//           <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>{isRegistering ? 'Register' : 'Log In'}</h2>
//           {error && <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
//           <label style={{ marginBottom: '15px', fontSize: '16px' }}>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', marginTop: '5px' }}
//               required
//             />
//           </label>
//           <label style={{ marginBottom: '15px', fontSize: '16px' }}>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', marginTop: '5px' }}
//               required
//             />
//           </label>
//           <button
//             type="submit"
//             style={{ padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#333', color: '#fff', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', transition: 'background-color 0.3s', marginBottom: '10px' }}
//           >
//             {isRegistering ? 'Register' : 'Login'}
//           </button>
//           <button
//             type="button"
//             onClick={() => setIsRegistering(!isRegistering)}
//             style={{ padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#333', color: '#fff', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', transition: 'background-color 0.3s' }}
//           >
//             {isRegistering ? 'Switch to Login' : 'Switch to Register'}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default LogIn;

import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate(from.pathname || '/', { replace: true });
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        setIsRegistering(false);
        setError('Registration successful! You can now log in.');
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <>
      <header className="header" style={{ borderBottom: '1px solid black' }}>
        <h1 className="header-title">Movies Library</h1>
        <nav className="header-nav">
          <Link className="nav-link" to="/">Home</Link>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Log Out</button>
          ) : (
            <Link className="nav-link" to="/login">Log In</Link>
          )}
        </nav>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 60px)', padding: '20px' }}>
        <form
          onSubmit={isRegistering ? handleRegister : handleLogin}
          style={{ display: 'flex', flexDirection: 'column', width: '300px', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}
        >
          <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>{isRegistering ? 'Register' : 'Log In'}</h2>
          {error && <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
          <label style={{ marginBottom: '15px', fontSize: '16px' }}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', marginTop: '5px' }}
              required
            />
          </label>
          <label style={{ marginBottom: '15px', fontSize: '16px' }}>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', marginTop: '5px' }}
              required
            />
          </label>
          <button
            type="submit"
            style={{ padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#333', color: '#fff', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', transition: 'background-color 0.3s', marginBottom: '10px' }}
          >
            {isRegistering ? 'Register' : 'Login'}
          </button>
          <button
            type="button"
            onClick={() => setIsRegistering(!isRegistering)}
            style={{ padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#333', color: '#fff', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', transition: 'background-color 0.3s' }}
          >
            {isRegistering ? 'Switch to Login' : 'Switch to Register'}
          </button>
        </form>
      </div>
    </>
  );
};

export default LogIn;
