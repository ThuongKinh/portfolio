import { Container, Box, Heading, useColorModeValue, Link, Button } from '@chakra-ui/react'
import brian from './images/brian.jpg'
import Image from 'next/image'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from "../components/bio"
import Layout from '../components/layout/article'


const Page = () => {
    return (

        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Xin chào Tôi là Phúc, mọi người có thể gọi tôi là Cút
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Xuân Phúc
                        </Heading>
                        <p>Xin chào</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                        <Image src={brian} style={{ borderRadius: '100%' }} width={80} height={80} />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Cút hiện tại là 1 học sinh cấp 3 và có đam mê với code khá sớm, hiện tại bây giờ đang cố gắng để vào được đại học.
                        Ước mơ của mình là sau này có thể làm những thứ mình thích như vẽ tranh, đọc sách, đánh đàn, học thêm về nhiều thứ mình thích. Đây là thông tin trên mxh của mình {' '}
                        <Link href="https://thuongkinh.github.io/biolink/">
                            <Link>Infomation</Link>
                        </Link>
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2006</BioYear>
                        Sinh ra ở Vinh, Việt Nam.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Bắt đầu con đường học code, bắt đầu với C++.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018 đến nay</BioYear>
                        Vẫn đang học.
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        💖
                    </Heading>
                    <Paragraph>
                        Art, Music, Drawing, Singing, Reading Book And Manga, Watch Anime, Coding.
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page