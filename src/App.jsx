import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loogedInUserData, setloogedInUserData] = useState(null)

  const [userData, setUserData] = useContext(AuthContext)

  const refreshUserData = () => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser)
        if (userData && userData.role === 'employee' && userData.data) {
          const employees = JSON.parse(localStorage.getItem('employees') || '[]')
          const updatedEmployee = employees.find(emp => emp.email === userData.data.email)
          if (updatedEmployee) {
            setloogedInUserData(updatedEmployee)
            localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmployee }))
          }
        }
      } catch (error) {
        console.error('Error refreshing user data:', error)
      }
    }
  }

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem('employees') || '[]')
    if (employees.length > 0) {
      employees.forEach(emp => {
        emp.taskCount = {
          newTask: emp.tasks.filter(t => t.newTask).length,
          active: emp.tasks.filter(t => t.active).length,
          completed: emp.tasks.filter(t => t.completed).length,
          failed: emp.tasks.filter(t => t.failed).length
        }
      })
      localStorage.setItem('employees', JSON.stringify(employees))
    }

    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser)
        if (userData && userData.role) {
          setUser(userData.role)
          if (userData.data) {
            const updatedEmployee = employees.find(emp => emp.email === userData.data.email)
            setloogedInUserData(updatedEmployee || userData.data)
          }
        }
      } catch (error) {
        console.error('Error parsing localStorage data:', error)
        localStorage.removeItem('loggedInUser')
      }
    }
  }, [])


  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (userData) {
      const employee = userData?.employees.find((emp) => email == emp.email && emp.password == password)

      if (employee) {
        setUser('employee')
        setloogedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert('Invalid Credentials')
      }
    }
    else {
      alert('Invalid Credentials')
    }
  }




  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : (
        user === 'admin' ? <AdminDashboard changeUser={setUser} /> : <EmployeeDashBoard changeUser={setUser} data={loogedInUserData} refreshUserData={refreshUserData} />
      )}
    </>
  )
}

export default App