import NextLink from 'next/link';
import {
    Box,
    Heading,
    Container,
    Divider,
    Button,
    Text
} from '@chakra-ui/react';
const NotFound=() => {
    return (
        <Container>
            <Heading>Không có gì cả</Heading>
            <Text>
                Ở đây không có cái gì đâu, chả biết nhét gì vào ;-;
            </Text>
            <Divider my={6}/>
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Về trang chủ</Button>
                </NextLink>
            </Box>
        </Container>
    )
}
export default NotFound