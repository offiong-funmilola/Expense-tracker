
type Post = {
    id: string,
    title: string,
    body: string
}


export default async function BlogPage() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts: Post[] = await data.json()
    return (
        <div className="w-full h-max p-5">
            <div className="w-full h-full flex flex-wrap items-start gap-3">
            {posts.map((post: Post) => (
                <div key={post.id} className="w-72 h-60 border-2 border-gray-400 p-2">
                    <h4 className="font-bold mb-1">{post.title} </h4>
                    <p>{post.body}</p>
                </div>
            ))}
            </div>
        </div>
    );
  }