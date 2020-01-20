export const TASK_LIST = 'TASK_LIST';
export const NEW_TASK = 'NEW_TASK';

const list = [
  { id: '1', title: 'Task 1', description: '', priority: 'low' },
  { id: '2', title: 'Task 2', description: '', priority: 'high' },
  { id: '3', title: 'Task 3', description: '', priority: 'low' },
  { id: '4', title: 'Task 4', description: '', priority: 'high' },
  { id: '5', title: 'Task 5', description: '', priority: 'archive' }
];

export const fetchTaskList = () => ({
  data: list,  
  type: TASK_LIST,
});

export const addNewTask = task => ({
  data: list.concat(task),  
  type: NEW_TASK,
});
