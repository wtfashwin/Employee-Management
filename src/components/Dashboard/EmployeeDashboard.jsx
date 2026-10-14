import { employeeType } from '../../propTypes'
import PropTypes from 'prop-types'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

EmployeeDashboard.propTypes = { changeUser: PropTypes.func.isRequired, data: employeeType.isRequired }

export default EmployeeDashboard