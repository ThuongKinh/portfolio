import { Container, Heading, SimpleGrid, Divide, Link } from "@chakra-ui/react"
import Section from "../components/section"
import { WorkGridItem,WorkGridItemVideo } from "../components/grid-item"
import information from "./images/info.png"
import portfolio from "./images/porfolio.png"
import Layout from '../components/layout/article'
import magic from "./images/magic.png"

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem href="http://quatrungcut.000webhostapp.com/" title="Thông tin" thumbnail={information}>
                            Một trang web về thông tin trên mxh của mình.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem href="/" title="Sơ yếu lí lịch" thumbnail={portfolio}>
                            Một trang web về tất cả thông tin của mình bao gồm lí lịch, sở thích và các bài tập.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem href="https://kinhthuong.github.io/the-magic/" title="Ma thuật" thumbnail={magic}>
                            Một trang web có ma thuật mang tên Winx Enchantix.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}
export default Works