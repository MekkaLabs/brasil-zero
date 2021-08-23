import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import Post from '../../types/post'
import Header from '../../components/header'

type Props = {
    allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {

    const morePosts = allPosts
    return (
        <>
            <Layout>

                <Head>
                    <title>Posts | Brazil Zero</title>
                </Head>
                <Container>
                    <Header />
                    <div className="p-2">
                        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                    </div>
                </Container>


            </Layout>
        </>
    )
}

export default Index

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'excerpt',
    ])

    return {
        props: { allPosts },
    }
}
