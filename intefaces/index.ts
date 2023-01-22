enum EPriority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
}

type IPriorityData = Array<{
    name: string;
    color: string;
}>;

type Task = { id: string; name: string; priority: EPriority; date: string; completed: boolean };

type ITasks = Array<Task>;

export type { IPriorityData, ITasks, Task };
export { EPriority };

