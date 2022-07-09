import { Link, Outlet, useLoaderData } from "remix";
import { getPosts } from "~/service/post";
import type { Post } from "~/service/post";

// export const links = () => {
//   return [{ rel: "stylesheet", href: adminStyles }];
// };

export const loader = () => {
  return getPosts();
};

export default function Admin() {
  const posts = useLoaderData<Post[]>();
  return (
    <div className="flex">
      <nav className="w-1/5">
        <ul className="py-3 px-5">
          {posts.map(post => (
            <li key={post.slug}>
              <Link to={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="p-12 w-4/5">
        <Outlet />
      </main>
    </div>
  );
}