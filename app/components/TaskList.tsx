import React from 'react';
import { Box, Checkbox, Flex, Icon, ListItem, Text } from '@chakra-ui/react';
import { IoTrashBin } from 'react-icons/io5';
import { CustomList } from '@/components';
import TaskItem from './TaskItem';
import { ITasks, Task } from '@/intefaces';
interface Props {
    tasksData: ITasks;
    updateCompletedStatus: (uuid: string) => void;
    deleteTask: (uuid: string) => void;
}
const TaskList = ({ tasksData, updateCompletedStatus, deleteTask }: Props) => {
    return (
        <CustomList
            width="calc(100% - 5px)"
            listData={
                <>
                    {tasksData.length > 0 ? (
                        tasksData.map((task: Task, index: number) => (
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
                                        size="md"
                                        isChecked={task.completed}
                                        colorScheme="purple"
                                        borderColor="purple"
                                        padding="1.5rem 0rem 1rem 1rem"
                                        onChange={() => updateCompletedStatus(task.id)}
                                    />
                                    <TaskItem task={task} />
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
                        ))
                    ) : (
                        <ListItem h="calc(100% - 9rem)">
                            <Text fontSize="lg" fontWeight="bold" flexGrow="9" color="#353a42" textAlign="center">
                                No Task found !
                            </Text>
                            <Text fontSize="md" flexGrow="9" color="#525457" textAlign="center" marginTop="-0.1rem">
                                Please add new tasks ...
                            </Text>
                        </ListItem>
                    )}
                </>
            }
        />
    );
};

export default TaskList;

