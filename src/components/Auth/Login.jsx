import React, { useState, useEffect } from 'react';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import Login from './components/Auth/Login';
import { getLocalStorage } from './utils/localStorage';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setEmployees(employees);
    setAdmin(admin);
  }, []);

  const handleLogin = (email, password) => {
    const user = employees.find(emp => emp.email === email && emp.password === password);
    if (user) {
      setCurrentUser({ ...user, role: 'employee' });
    } else {
      const adminUser = admin.find(adm => adm.email === email && adm.password === password);
      if (adminUser) {
        setCurrentUser({ ...adminUser, role: 'admin' });
      } else {
        alert('Invalid credentials');
      }
    }
  };

  const changeUser = (user) => {
    setCurrentUser(user);
  };

  const logOutUser = () => {
    setCurrentUser(null);
    localStorage.setItem('loggedInUser', '');
  };

  return (
    <div>
      {currentUser ? (
        currentUser.role === 'admin' ? (
          <AdminDashboard changeUser={changeUser} logOutUser={logOutUser} user={currentUser} />
        ) : (
          <EmployeeDashboard changeUser={changeUser} logOutUser={logOutUser} data={currentUser} />
        )
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
