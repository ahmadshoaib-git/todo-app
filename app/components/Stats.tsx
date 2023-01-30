import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface IStats {
    tasksLength: number;
    filteredTaskLength: number;
    completedTasksLength: number;
}
const Stats = ({ tasksLength, filteredTaskLength, completedTasksLength }: IStats) => {
    return (
        <Flex gap="1rem" marginTop="1rem" justifyContent="space-between">
            <Flex>
                <Text fontSize="sm" fontWeight="bold" flexGrow="9" color="#353a42" textAlign="center">
                    Total Tasks:
                </Text>
                <Text fontSize="sm" fontWeight="bold" flexGrow="9" color="#353a42" textAlign="center">
                    {filteredTaskLength}/{tasksLength}
                </Text>
            </Flex>

            <Flex>
                <Text fontSize="sm" fontWeight="bold" flexGrow="9" color="#353a42" textAlign="center">
                    Completed:
                </Text>
                <Text fontSize="sm" fontWeight="bold" flexGrow="9" color="#353a42" textAlign="center">
                    {completedTasksLength}/{filteredTaskLength}
                </Text>
            </Flex>
        </Flex>
    );
};

export default Stats;

