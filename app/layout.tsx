'use client';
import { Container, Flex, Text } from '@chakra-ui/react';
import { ChakraWrapper } from '@/components';
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body style={{ overflowY: 'hidden' }}>
                <Container centerContent={true} h="100vh">
                    <Text fontSize="2rem" color="#1A365D" textTransform="uppercase" margin="0.5rem 0 0.5rem 0" textAlign="center" marginTop="2rem">
                        Task To Do!
                    </Text>
                    <ChakraWrapper>{children}</ChakraWrapper>
                </Container>
            </body>
        </html>
    );
}

