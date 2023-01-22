import { Button, ButtonProps } from '@chakra-ui/react';

type TButtonProps = ButtonProps & { name: string };

const CustomButton = (props: TButtonProps) => {
    const { name, ...rest } = props;
    return <Button {...rest}>{name}</Button>;
};

export default CustomButton;

