// Action creator 

export const selectTask = (tasks) => {
    return {
        type: 'TASK_SELECTED',
        payload: tasks
    }
}
