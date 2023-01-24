'use client';
import React from 'react';
import { Box, Checkbox, Flex, FormControl, FormLabel, Text } from '@chakra-ui/react';
import { v1 as uuid } from 'uuid';
import { ImFlag } from 'react-icons/im';
import { CustomInput, CustomSelect, CustomButton } from '@/components';
import { priorityData, initialTasksData } from '@/utils';
import { EPriority, ITasks, Task } from '@/intefaces';
import useLocalStorage from '@/hooks/useLocalStorage';
import TaskList from './components/TaskList';

type TFilter = 'all' | 'completed' | EPriority;

const initialFormFields = {
    name: '',
    priority: EPriority.LOW,
};

export default function Home() {
    const [tasks, setTasks] = useLocalStorage('todoData', initialTasksData);
    const [formInput, setFormInput] = React.useState(initialFormFields);
    const [filter, setFilter] = React.useState('all' as TFilter);
    const inputChangeHandler = (event: any): void => {
        setFormInput((prevFormState) => ({
            ...prevFormState,
            [event.target.name]: event.target.value,
        }));
    };

    const handleFormSubmit = (): void => {
        if (!formInput.name) return;
        let taskData: Task = {
            id: uuid(),
            name: formInput.name,
            priority: formInput.priority,
            date: new Date().toISOString(),
            completed: false,
        };
        setTasks([taskData, ...tasks]);
        setFormInput(initialFormFields);
    };

    const updateCompletedStatus = (uuid: string) => {
        let updatedTasksData = tasks.map((task: Task) => {
            if (uuid === task.id) {
                return {
                    id: task.id,
                    name: task.name,
                    priority: task.priority,
                    completed: !task.completed,
                    date: new Date().toISOString(),
                };
            }
            return task;
        });
        setTasks(updatedTasksData);
    };

    const deleteTask = (uuid: string) => {
        let updatedTasksData = tasks.filter((task: Task) => {
            if (uuid !== task.id) return task;
        });
        setTasks(updatedTasksData);
    };

    const getTotalTasks = (): ITasks => {
        return tasks.filter((task) => {
            if (filter !== 'all') {
                if (filter === 'completed' && task.completed) return task;
                else if (task.priority === filter) return task;
                else return;
            } else return task;
        });
    };

    const tasksLength = tasks?.length ? tasks.length : 0;
    const completedTasks = getTotalTasks().filter((task) => task.completed === true)?.length;

    return (
        <Box as="main" bg="gray.50" padding="2rem" marginBottom="2rem" borderRadius="0.4rem">
            <Flex w="xl" maxW="xl" flexDirection="column" borderRadius="0.2rem" height="calc(100vh - 12rem)">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleFormSubmit();
                    }}
                >
                    <Flex gap="1rem">
                        <FormControl>
                            <FormLabel color="#1A365D">Task Name</FormLabel>
                            <CustomInput name="name" value={formInput.name} onChange={inputChangeHandler} flexGrow="2" placeholder="Task Name" size="lg" />
                        </FormControl>
                        <FormControl>
                            <FormLabel color="#1A365D">Priority</FormLabel>
                            <CustomSelect
                                name="priority"
                                value={formInput.priority}
                                onChange={inputChangeHandler}
                                flexGrow="1"
                                size="lg"
                                options={
                                    <>
                                        {priorityData.map((data, index) => (
                                            <option key={index.toString()}>
                                                <ImFlag />
                                                {data.name}
                                            </option>
                                        ))}
                                    </>
                                }
                            />
                        </FormControl>
                    </Flex>
                    <CustomButton
                        type="submit"
                        name="Add Task"
                        bg="green.500"
                        color="green.50"
                        marginTop="1rem"
                        size="lg"
                        width="100%"
                        _focusVisible={{
                            border: '1px solid green.800',
                            background: 'green.800',
                        }}
                        _hover={{
                            border: '1px solid green.800',
                            background: 'green.800',
                        }}
                    />
                </form>
                {tasksLength > 0 && (
                    <>
                        <Flex gap="1rem" marginTop="1rem" justifyContent="space-between">
                            <Flex>
                                <Text fontSize="sm" fontWeight="bold" flexGrow="9" color="#353a42" textAlign="center">
                                    Total Tasks:
                                </Text>
                                <Text fontSize="sm" fontWeight="bold" flexGrow="9" color="#353a42" textAlign="center">
                                    {getTotalTasks()?.length || 0}/{tasksLength}
                                </Text>
                            </Flex>

                            <Flex>
                                <Text fontSize="sm" fontWeight="bold" flexGrow="9" color="#353a42" textAlign="center">
                                    Completed:
                                </Text>
                                <Text fontSize="sm" fontWeight="bold" flexGrow="9" color="#353a42" textAlign="center">
                                    {completedTasks}/{getTotalTasks()?.length || 0}
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex gap="1rem" marginTop="1rem" justifyContent="space-between">
                            <Checkbox
                                name="all"
                                marginRight="0.4rem"
                                size="md"
                                isChecked={filter === 'all'}
                                colorScheme="gray"
                                borderColor="gray"
                                onChange={() => setFilter('all')}
                            >
                                All
                            </Checkbox>
                            <Checkbox
                                name="completed"
                                marginRight="0.4rem"
                                size="md"
                                isChecked={filter === 'completed'}
                                colorScheme="purple"
                                borderColor="purple"
                                onChange={() => setFilter('completed')}
                            >
                                Completed
                            </Checkbox>
                            <Checkbox
                                name={EPriority.LOW}
                                marginRight="0.4rem"
                                size="md"
                                isChecked={filter === EPriority.LOW}
                                colorScheme="blue"
                                borderColor="blue"
                                onChange={() => setFilter(EPriority.LOW)}
                            >
                                {EPriority.LOW}
                            </Checkbox>
                            <Checkbox
                                name={EPriority.MEDIUM}
                                marginRight="0.4rem"
                                size="md"
                                isChecked={filter === EPriority.MEDIUM}
                                colorScheme="green"
                                borderColor="green"
                                onChange={() => setFilter(EPriority.MEDIUM)}
                            >
                                {EPriority.MEDIUM}
                            </Checkbox>
                            <Checkbox
                                name={EPriority.HIGH}
                                marginRight="0.4rem"
                                size="md"
                                isChecked={filter === EPriority.HIGH}
                                colorScheme="red"
                                borderColor="red"
                                onChange={() => setFilter(EPriority.HIGH)}
                            >
                                {EPriority.HIGH}
                            </Checkbox>
                        </Flex>
                    </>
                )}
                <Box
                    as="div"
                    marginTop="2rem"
                    maxH="calc(100% - 9rem)"
                    overflowY="auto"
                    display="flex"
                    alignItems={tasks.length > 0 ? 'start' : 'center'}
                    css={{
                        '&::-webkit-scrollbar': {
                            width: '0.2rem',
                            paddingLeft: '1rem',
                        },
                        '&::-webkit-scrollbar-track': {
                            width: '0.2rem',
                            paddingLeft: '1rem',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#959ca4',
                            borderRadius: '1rem',
                            paddingLeft: '1rem',
                        },
                    }}
                >
                    <TaskList tasksData={getTotalTasks()} updateCompletedStatus={updateCompletedStatus} deleteTask={deleteTask} />
                </Box>
            </Flex>
        </Box>
    );
}

