import { List, ListItem, ListIcon, ListProps } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

type TButtonProps = ListProps & { listData: React.ReactElement };

const CustomList = (props: TButtonProps) => {
    const { listData, ...rest } = props;
    return (
        <List spacing={3} {...rest}>
            {listData}
        </List>
    );
};

export default CustomList;

