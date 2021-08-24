import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {

  const morePosts = allPosts
  return (
    <div className="dark:bg-black">
      <Layout>
        <Head>
          <title>Brasil Zero</title>
        </Head>
        <Container>
          <div className="pb-12">
            <Intro />
          </div>
          <div className="p-2">
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
        </Container>
      </Layout>
    </div>
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
