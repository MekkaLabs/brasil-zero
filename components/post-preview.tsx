import Avatar from './avatar'
import DateFormatter from './date-formatter'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className="transform hover:scale-105 hover:translate-x-4 motion-reduce:transform-none duration-700">
      <h3 className="text-3xl font-black mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline transform translate-x-1/2 xl:transform-none xl:translate-x-0">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{excerpt}</a>
        </Link>
      </p>
      <Link href="/ranking">
        <a>
          <Avatar name={author.name} /></a></Link>
    </div>
  )
}

export default PostPreview
