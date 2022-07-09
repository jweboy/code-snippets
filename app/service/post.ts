/*
 * @Author: jweboy
 * @Date: 2021-12-17 16:12:19
 * @LastEditors: jweboy
 * @LastEditTime: 2022-01-07 10:42:33
 */
import path from "path";
import fs from "fs";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";

export type Post = {
  slug: string;
  title: string;
  html: string;
  body: string;
};

export type PostMarkdownAttributes = {
  title: string;
};

const postsPath = path.join(__dirname, "..", "posts");

function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title;
}

export async function getPosts() {
  const dir = await fs.promises.readdir(postsPath);
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.promises.readFile(path.join(postsPath, filename));
      const { attributes } = await parseFrontMatter(file.toString());
      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad meta data!`
      );
      return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
      };
    })
  );
}

export async function getPost(slug: string) {
  const filepath = path.join(postsPath, slug + ".md");
  const file = await fs.promises.readFile(filepath);
  const { attributes, body } = parseFrontMatter(file.toString());
  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} is missing attributes`
  );
  console.log(233, body);
  const html = marked(body);
  return { slug, html: html, body, title: attributes.title };
}

// ...
export async function createPost(post) {
  const md = `---\ntitle: ${post.slug}\n---\n\n${post.content}`;
  await fs.promises.writeFile(path.join(postsPath, post.slug + ".md"), md);
  return getPost(post.slug);
}
