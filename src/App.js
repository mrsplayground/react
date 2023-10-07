import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        name: "Caleb", 
        role: "Intern", 
        img:"https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg"
      },
      {
        name: "Abby", 
        role: "Manager", 
        img:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg"
      },
      {
        name: "John",
        role: "SDE",
        img:"https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg"
      },
      {
        name: "Chris", 
        role: "Senior", 
        img:"https://images.pexels.com/photos/14697557/pexels-photo-14697557.jpeg"
      },
      {
        name: "Marcia", 
        role: 'CTO', 
        img:"https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg"
      },
      {
        name: "Sandra", 
        role: "Finance", 
        img:"https://images.pexels.com/photos/7520771/pexels-photo-7520771.jpeg"
      }
    ]
  );
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
        <input type='test' onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
        }} />
          <div className="flex flex-wrap justify-center">
            {employees.map ((employee) => {
              return (
                  <Employee 
                  key = {uuidv4()}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
