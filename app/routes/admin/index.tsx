/*
 * @Author: jweboy
 * @Date: 2021-12-17 18:04:33
 * @LastEditors: jweboy
 * @LastEditTime: 2022-01-06 21:12:44
 */
import { redirect, useActionData, Form, useTransition } from "remix";
import type { ActionFunction } from "remix";
import { createPost } from "~/service/post";
import invariant from "tiny-invariant";
import MarkdownEditor from "~/components/MarkdownEditor";
import * as React from 'react'

type PostError = {
  title?: boolean;
  slug?: boolean;
  markdown?: boolean;
};


export const action: ActionFunction = async ({
  request
}) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");

  const errors: PostError = {};
  if (!title) errors.title = true;
  if (!slug) errors.slug = true;
  if (!markdown) errors.markdown = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof title === "string");
  invariant(typeof slug === "string");
  invariant(typeof markdown === "string");

  await createPost({ title, slug, markdown });

  return redirect("/admin");
};



function NewPost() {
  const errors = useActionData();
  const transition = useTransition();

  return (
    <Form reloadDocument method="post" >
      <div className="mb-4">
        <label>
          Post Title:{" "}
          {errors?.title ? (
            <em>Title is required</em>
          ) : null}
          <input className="outline-none pl-2 rounded-md" type="text" name="title" />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Post Slug:{" "}
          {errors?.slug ? <em>Slug is required</em> : null}
          <input className="outline-none pl-2 rounded-md" type="text" name="slug" />
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="markdown">Markdown:</label>{" "}
        {errors?.markdown ? (
          <em>Markdown is required</em>
        ) : null}
        <textarea className="border border-gray-300 w-full outline-none pl-2  rounded-md" rows={8} name="markdown" />
      </div>
      <div>
        <button className="bg-sky-400 text-white py-2 px-3 rounded outline-none" type="submit">{transition.submission
          ? "Creating..."
          : "Create Post"}</button>
      </div>
    </Form>
  );
}

export default NewPost