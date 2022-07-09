/*
 * @Author: jweboy
 * @Date: 2021-12-17 16:04:17
 * @LastEditors: jweboy
 * @LastEditTime: 2022-01-06 19:49:22
 */
import { Link, LinksFunction, useLoaderData } from "remix";
import { getPosts } from "~/service/post";
import type { Post } from "~/service/post";
import PostActions from "./actions";
import Navbar from "~/components/Navbar";
import SnippetCard from "~/components/SnippetCard";
import stylesUrl from '~/styles/posts/snippet-card.css'

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
    // {
    //   rel: "stylesheet", href: 'https://assets.jweboy.com/bytemd/index.min.css'
    // },
    // {
    //   rel: 'stylesheet', href: 'https://unpkg.com/github-markdown-css'
    // }
  ];
};

export const loader = () => {
  return getPosts()
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  return (
    <main className="p-8 w-1/2 m-auto">
      <h2 className="text-2xl mb-4">Code Snippets</h2>
      <div className="grid gap-4">
        {posts.map(item => (
          <SnippetCard key={item.slug} {...item} />
        ))}
      </div>
    </main>
  );
}