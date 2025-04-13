import { useRouter } from 'next/router'
import Link from 'next/link'

const Post = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
        <h1>Post ID: {id}</h1>
        </div>
    )
}
export default Post