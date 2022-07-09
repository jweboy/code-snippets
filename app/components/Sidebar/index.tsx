/*
 * @Author: jweboy
 * @Date: 2022-01-06 15:56:17
 * @LastEditors: jweboy
 * @LastEditTime: 2022-01-06 17:28:36
 */
import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

const Sidebar = () => {
  const data = useLoaderData<IndexData>()
  return (
    <aside className="w-64">
      <ul>
        {data.demos.map(demo => (
          <li key={demo.to} className="remix__page__resource">
            <Link to={demo.to} prefetch="intent">
              {demo.name}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Resources</h2>
      <ul>
        {data.resources.map(resource => (
          <li key={resource.url} className="remix__page__resource">
            <a href={resource.url}>{resource.name}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
