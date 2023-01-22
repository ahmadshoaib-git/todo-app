import { Select, SelectProps } from '@chakra-ui/react';
type TSelectProps = SelectProps & { options: React.ReactElement };

const CustomSelect = (props: TSelectProps) => {
    const { options, ...rest } = props;
    return (
        <Select
            fontSize="xl"
            _placeholder={{ color: 'grey.200' }}
            border="1px solid #1A365D"
            _focusVisible={{
                border: '1px solid #1A365D',
            }}
            _hover={{
                border: '1px solid #1A365D',
            }}
            {...rest}
        >
            {options}
        </Select>
    );
};

export default CustomSelect;

