import React from 'react';
import { Flex, Checkbox } from '@chakra-ui/react';
import { EPriority, ERecordFilter, TFilter } from '@/intefaces';

interface ITaskFilter {
    filterName: TFilter;
    applyFilter: (newFilter: TFilter) => void;
}

const TasksFilter = ({ filterName, applyFilter }: ITaskFilter) => {
    return (
        <Flex gap="1rem" marginTop="1rem" justifyContent="space-between">
            <Checkbox
                name="all"
                marginRight="0.4rem"
                size="md"
                isChecked={filterName === ERecordFilter.ALL}
                colorScheme="gray"
                borderColor="gray"
                onChange={() => applyFilter(ERecordFilter.ALL)}
            >
                All
            </Checkbox>
            <Checkbox
                name="completed"
                marginRight="0.4rem"
                size="md"
                isChecked={filterName === ERecordFilter.COMPLETED}
                colorScheme="purple"
                borderColor="purple"
                onChange={() => applyFilter(ERecordFilter.COMPLETED)}
            >
                Completed
            </Checkbox>
            <Checkbox
                name={EPriority.LOW}
                marginRight="0.4rem"
                size="md"
                isChecked={filterName === EPriority.LOW}
                colorScheme="blue"
                borderColor="blue"
                onChange={() => applyFilter(EPriority.LOW)}
            >
                {EPriority.LOW}
            </Checkbox>
            <Checkbox
                name={EPriority.MEDIUM}
                marginRight="0.4rem"
                size="md"
                isChecked={filterName === EPriority.MEDIUM}
                colorScheme="green"
                borderColor="green"
                onChange={() => applyFilter(EPriority.MEDIUM)}
            >
                {EPriority.MEDIUM}
            </Checkbox>
            <Checkbox
                name={EPriority.HIGH}
                marginRight="0.4rem"
                size="md"
                isChecked={filterName === EPriority.HIGH}
                colorScheme="red"
                borderColor="red"
                onChange={() => applyFilter(EPriority.HIGH)}
            >
                {EPriority.HIGH}
            </Checkbox>
        </Flex>
    );
};

export default TasksFilter;

