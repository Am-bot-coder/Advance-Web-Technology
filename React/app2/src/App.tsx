// rfce

import { EmployeeComponent } from './component/employee';
import type Employee from './interface/employee';

function App() {

   const emparr: Employee[] = [
        { name: 'anil', salary: 10000 },
        { name: 'mukesh', salary: 20000 },
        { name: 'ramesh', salary: 30000 },
        { name: 'suresh', salary: 40000 }
    ]
  return (
    <div>
      <EmployeeComponent name='Ayush' salary={10000}/>
      <EmployeeComponent name='Pruthviraj' salary={50000}/>
      <EmployeeComponent name='Shrikant' salary={500000}/>

      {
        emparr.map(e =>  <EmployeeComponent name={e.name} salary={e.salary} />)
      }
    </div>
  )
}


export default App
