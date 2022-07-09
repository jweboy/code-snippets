/*
 * @Author: jweboy
 * @Date: 2021-12-20 18:45:16
 * @LastEditors: jweboy
 * @LastEditTime: 2021-12-20 18:48:10
 */
import { useEffect, useRef } from "react";
import type { ActionFunction, LinksFunction } from "remix";
import { Form, json, useActionData, redirect } from "remix";
import MarkdownEditor from "~/components/MarkdownEditor";

export function meta() {
  return { title: "Actions Demo" };
}

// When your form sends a POST, the action is called on the server.
// - https://remix.run/api/conventions#action
// - https://remix.run/guides/data-updates
export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let answer = formData.get("answer");

  // Typical action workflows start with validating the form data that just came
  // over the network. Clientside validation is fine, but you definitely need it
  // server side.  If there's a problem, return the the data and the component
  // can render it.
  if (typeof answer !== "string") {
    return json("Come on, at least try!", { status: 400 });
  }

  if (answer !== "egg") {
    return json(`Sorry, ${answer} is not right.`, { status: 400 });
  }

  // Finally, if the data is valid, you'll typically write to a database or send or
  // email or log the user in, etc. It's recommended to redirect after a
  // successful action, even if it's to the same place so that non-JavaScript workflows
  // from the browser doesn't repost the data if the user clicks back.
  return redirect("/demos/correct");
};

function PostActions() {
  // https://remix.run/api/remix#useactiondata
  let actionMessage = useActionData<string>();
  let answerRef = useRef<HTMLInputElement>(null);

  // This form works without JavaScript, but when we have JavaScript we can make
  // the experience better by selecting the input on wrong answers! Go ahead, disable
  // JavaScript in your browser and see what happens.
  useEffect(() => {
    if (actionMessage && answerRef.current) {
      answerRef.current.select();
    }
  }, [actionMessage]);

  return (
    <div className="remix__page">
      <MarkdownEditor />
    </div>
  );
}

export default PostActions