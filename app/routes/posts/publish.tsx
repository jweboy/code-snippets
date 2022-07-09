import React from 'react'
import { ActionFunction, Form, LinksFunction, redirect, useActionData } from 'remix';
import invariant from 'tiny-invariant';
import MarkdownEditor from '~/components/MarkdownEditor'
import { createPost } from '~/service/post';

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: 'https://assets.jweboy.com/bytemd/index.min.css' }];
};

type PostError = {
  title?: boolean;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const body: Record<string, any> = {};
  for (const [key, value] of formData.entries()) {
    body[key] = value;
  }
  await createPost(body);
  return redirect("/posts/publish");
}

const PublishPosts = React.memo(
  () => {
    const [content, setContent] = React.useState('')

    const handleEditorChange = (value) => {
      console.log('val->', value)
      setContent(value)
    }

    return (
      <div className="p-8 w-2/3 m-auto">
        <Form method="post" className="grid gap-4">
          <h3>Create Post</h3>
          <label>
            Title:
            <input name="slug" type="text" placeholder="Please input title" defaultValue="test" />
          </label>
          <label>
            Content:
            <MarkdownEditor onChange={handleEditorChange} />
          </label>
          <label>
            <textarea name="content" defaultValue={content} hidden />
          </label>
          <button className="bg-sky-400 text-white py-2 px-3 rounded outline-none" type="submit">submit</button>
        </Form>
      </div>
    )
  }
)

export default PublishPosts