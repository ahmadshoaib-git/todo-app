enum EPriority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
}

enum ERecordFilter {
    ALL = 'all',
    COMPLETED = 'completed',
}

type TFilter = ERecordFilter | EPriority;

type IPriorityData = Array<{
    name: string;
    color: string;
}>;

type Task = { id: string; name: string; priority: EPriority; date: string; completed: boolean };

type ITasks = Array<Task>;

export type { IPriorityData, ITasks, Task };
export { EPriority, ERecordFilter, TFilter };

