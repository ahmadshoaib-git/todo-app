import { EPriority, IPriorityData, ITasks } from '@/intefaces';
import { v1 as uuid } from 'uuid';

const priorityData = [
    {
        name: 'low',
        color: 'blue.300',
    },
    {
        name: 'medium',
        color: 'green.300',
    },
    {
        name: 'high',
        color: 'red.300',
    },
] as IPriorityData;

const initialTasksData = [
    { id: uuid(), name: 'Task 1', priority: EPriority.HIGH, date: '2023-01-21T21:07:40.446Z', completed: false },
    { id: uuid(), name: 'Task 2', priority: EPriority.LOW, date: '2023-01-20T21:02:00.446Z', completed: true },
    { id: uuid(), name: 'Task 3', priority: EPriority.MEDIUM, date: '2023-01-19T21:11:22.446Z', completed: false },
] as ITasks;

export { priorityData, initialTasksData };

