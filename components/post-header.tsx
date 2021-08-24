import Avatar from './avatar'
import DateFormatter from './date-formatter'
import PostTitle from './post-title'
import Author from '../types/author'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  author: Author
}

const PostHeader = ({ title, date, author }: Props) => {
  return (
    <>

      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Link href="/ranking">
          <a>
            <Avatar name={author.name} /></a></Link>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Link href="/ranking">
            <a>
              <Avatar name={author.name} /></a></Link>
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>

    </>
  )
}

export default PostHeader
