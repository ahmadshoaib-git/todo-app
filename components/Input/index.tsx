import { Input, Button, InputGroup, InputRightElement, InputProps } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const CustomInput = (props?: InputProps) => {
    return (
        <Input
            fontSize="xl"
            border="1px solid #1A365D"
            outline="none"
            color="#1A365D"
            _focusVisible={{
                border: '1px solid #1A365D',
            }}
            _hover={{
                border: '1px solid #1A365D',
            }}
            {...props}
        />
    );
};

export default CustomInput;

