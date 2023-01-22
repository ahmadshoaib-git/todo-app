import React from 'react';
import { Badge, Box, Flex, Text } from '@chakra-ui/react';
import { FcCalendar, FcClock } from 'react-icons/fc';
import { EPriority, Task } from '@/intefaces';

interface Props {
    task: Task;
}

const getPriorityColor = (priority: EPriority): string => {
    let color = 'blue';
    if (priority === EPriority.MEDIUM) color = 'green';
    if (priority === EPriority.HIGH) color = 'red';
    return color;
};

const TaskItem = ({ task }: Props) => {
    return (
        <Box as="div" width="100%">
            <Flex gap="0.5rem" alignItems="center" padding="1.5rem 1rem 1rem 1rem" height="1.4rem">
                <Text fontSize="md" fontWeight="bold" flexGrow="9" color="#1A365D" textDecoration={task.completed ? 'line-through' : 'unset'}>
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

export default TaskItem;

