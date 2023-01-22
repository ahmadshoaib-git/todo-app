'use client';
import React from 'react';
import { Badge, Box, Checkbox, Flex, ListItem, Text, Icon, FormControl, FormLabel } from '@chakra-ui/react';
import { v1 as uuid } from 'uuid';
import { FcCalendar, FcClock } from 'react-icons/fc';
import { ImFlag } from 'react-icons/im';
import { IoTrashBin } from 'react-icons/io5';
import { CustomInput, CustomList, CustomSelect, CustomButton } from '@/components';
import { priorityData, initialTasksData } from '@/utils';
import { ITasks, EPriority, Task } from '@/intefaces';

const initialFormFields = {
    name: '',
    priority: EPriority.LOW,
};

export default function Home() {
    const [tasks, setTasks] = React.useState(initialTasksData as ITasks);
    const [formInput, setFormInput] = React.useState(initialFormFields);
    const inputChangeHandler = (event: any): void => {
        setFormInput((prevFormState) => ({
            ...prevFormState,
            [event.target.name]: event.target.value,
        }));
    };

    const handleFormSubmit = (): void => {
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

    const getPriorityColor = (priority: EPriority): string => {
        let color = 'blue';
        if (priority === EPriority.MEDIUM) color = 'green';
        if (priority === EPriority.HIGH) color = 'red';
        return color;
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
    const getListInnerData = (task: Task): React.ReactElement => {
        return (
            <Box as="div" width="100%">
                <Flex gap="0.5rem" alignItems="center" padding="1.5rem 1rem 1rem 1rem" height="1.4rem">
                    <Text fontSize="md" fontWeight="bold" flexGrow="9" color="#1A365D">
                        {task.name}
                    </Text>
                    <Badge
                        variant="outline"
                        colorScheme={getPriorityColor(task.priority)}
                        textTransform="uppercase"
                        fontSize="sm"
                        maxW="5rem"
                        flexGrow="1"
                        textAlign="center"
                    >
                        {task.priority}
                    </Badge>
                </Flex>
                <Flex justifyContent="space-between" padding="0rem 1rem 0.5rem 1rem">
                    <Text fontSize="sm" display="flex" justifyContent="space-between" gap="0.2rem" alignItems="center" color="#1A365D">
                        <FcCalendar />
                        {new Date(task.date).toLocaleDateString('en-US')}
                    </Text>
                    {task.completed && (
                        <Badge variant="outline" colorScheme="purple" textTransform="uppercase" fontSize="sm" maxW="6rem" textAlign="center">
                            Completed
                        </Badge>
                    )}
                    <Text fontSize="sm" display="flex" justifyContent="space-between" gap="0.2rem" alignItems="center" color="#1A365D">
                        <FcClock />
                        {new Date(task.date).toLocaleTimeString('en-US')}
                    </Text>
                </Flex>
            </Box>
        );
    };
    return (
        <Box as="main" bg="gray.50" padding="2rem" h="100%" marginBottom="2rem" borderRadius="0.4rem">
            <Flex h="100%" w="xl" maxW="40rem" flexDirection="column" borderRadius="0.2rem">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log('Submitting');
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
                <Box
                    as="div"
                    marginTop="2rem"
                    paddingBottom="2rem"
                    overflowY="auto"
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
                    <CustomList
                        listData={
                            <>
                                {tasks.map((task, index) => (
                                    <ListItem
                                        key={index.toString()}
                                        bg="gray.200"
                                        cursor="pointer"
                                        _hover={{
                                            background: 'gray.300',
                                        }}
                                        borderRadius="0.3rem"
                                    >
                                        <Flex gap="0.1rem" alignItems="center">
                                            <Checkbox
                                                checked={task.completed}
                                                colorScheme="purple"
                                                borderColor="purple"
                                                padding="1.5rem 0rem 1rem 1rem"
                                                onChange={() => updateCompletedStatus(task.id)}
                                            />
                                            {getListInnerData(task)}
                                            <Box as="div" padding="1.5rem 1rem 1rem 0.5rem">
                                                <Icon
                                                    as={IoTrashBin}
                                                    color="#1A365D"
                                                    cursor="pointer"
                                                    fontSize="1.2rem"
                                                    _hover={{ color: 'red.400' }}
                                                    onClick={() => deleteTask(task.id)}
                                                />
                                            </Box>
                                        </Flex>
                                    </ListItem>
                                ))}
                            </>
                        }
                    />
                </Box>
            </Flex>
        </Box>
    );
}

