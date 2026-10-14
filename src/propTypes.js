import PropTypes from 'prop-types'

export const taskType = PropTypes.shape({
  category: PropTypes.string.isRequired,
  taskDate: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  taskDescription: PropTypes.string.isRequired,
  active: PropTypes.bool,
  newTask: PropTypes.bool,
  completed: PropTypes.bool,
  failed: PropTypes.bool,
})

export const employeeType = PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  taskCounts: PropTypes.shape({
    newTask: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    completed: PropTypes.number.isRequired,
    failed: PropTypes.number.isRequired,
  }).isRequired,
  tasks: PropTypes.arrayOf(taskType).isRequired,
})
