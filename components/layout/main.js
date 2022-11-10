import Head from 'next/head'
import Navbar from '../navbar.js'
import { Container, Box } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog.js'
import { useRouter } from 'next/router'
import NoSsr from '../no-ssr.js'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Cút lộn xào me - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <VoxelDog/>
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main