/*
 * @Author: jweboy
 * @Date: 2022-01-06 14:58:13
 * @LastEditors: jweboy
 * @LastEditTime: 2022-01-06 21:41:28
 */
import { Link } from 'remix'

const Navbar = () => {
  return (
    <nav aria-label="Main navigation" className="remix-app__header-nav">
      <ul>
        <li>
          <Link className="outline-none" to="/">Home</Link>
        </li>
        {/* <li>
          <Link className="outline-none" to="/admin">Admin</Link>
        </li> */}
        <li>
          <Link className="outline-none" to="/posts">Posts</Link>
        </li>
        <li>
          <a className="outline-none" href="/posts/publish">Publish</a>
        </li>
        <li>
          <a className="outline-none" href="https://remix.run/docs" target="_blank">Remix Docs</a>
        </li>
        {/* <li>
          <a className="outline-none" href="https://github.com/remix-run/remix" target="_blank">GitHub</a>
        </li> */}
      </ul>
    </nav>
  )
}

export default Navbar
