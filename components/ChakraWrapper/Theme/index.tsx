import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: (props: any) => ({
        body: {
            fontFamily: 'body',
            color: mode('#1A365D', 'whiteAlpha.900')(props),
            bg: mode('white', '#1A365D')(props),
            lineHeight: 'base',
            height: '100vh',
            minHeight: '100vh',
        },
        '*::placeholder': {
            color: mode('gray.600', 'whiteAlpha.400')(props),
        },
        '*, *::before, &::after': {
            borderColor: mode('#1A365D', 'whiteAlpha.300')(props),
            wordWrap: 'break-word',
        },
    }),
};

const theme = extendTheme({
    ...styles,
    components: {
        Select: {
            parts: ['field', 'icon'],
            baseStyle: {
                field: {
                    color: '#1A365D',
                },
            },
        },
    },
});

export default theme;

