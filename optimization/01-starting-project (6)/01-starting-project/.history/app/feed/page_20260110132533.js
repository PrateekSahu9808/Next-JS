import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
// export const metadata = {
//   title: "ALL Posts",
//   description: "Browse our ALL Posts",
// };

export async function generateMetaData() {}
export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
