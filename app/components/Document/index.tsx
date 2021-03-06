import { Meta, Links, ScrollRestoration, Scripts, LiveReload } from 'remix'
import React from 'react'

/*
 * @Author: jweboy
 * @Date: 2022-01-06 15:10:22
 * @LastEditors: jweboy
 * @LastEditTime: 2022-01-06 21:54:24
 */

function Document({
  children,
  title
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default Document