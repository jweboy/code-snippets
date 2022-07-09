/*
 * @Author: jweboy
 * @Date: 2021-12-17 16:47:46
 * @LastEditors: jweboy
 * @LastEditTime: 2022-01-06 21:34:46
 */

import { LinksFunction, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPost, Post } from "~/service/post";
import invariant from "tiny-invariant";
import SnippetCard from "~/components/SnippetCard";
import stylesUrl from '~/styles/posts/snippet-card.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import React from "react";

// SyntaxHighlighter.registerLanguage('javascript', javascript)

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader: LoaderFunction = async ({
  params
}) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

const PostSlug = React.memo(() => {
  const post = useLoaderData<Post>();
  const { html } = post;
  const code = html.slice(31, html.length - 14);
  return (
    <div className="p-8 w-1/2 m-auto">
      <SnippetCard title={post.title} readonly>
        <SyntaxHighlighter wrapLongLines language="javascript">
          {code}
        </SyntaxHighlighter>
      </SnippetCard>
    </div>
  );
})

PostSlug.displayName = 'PostSlug'

export default PostSlug