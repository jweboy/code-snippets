/*
 * @Author: jweboy
 * @Date: 2022-01-06 15:14:54
 * @LastEditors: jweboy
 * @LastEditTime: 2022-01-06 21:26:14
 */
import React from 'react'
import { Link } from 'remix'
import RemixLogo from '~/components/RemixLogo'
import Navbar from '~/components/Navbar'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="remix-app">
      <header className="remix-app__header">
        <div className="container remix-app__header-content">
          <Link to="/" title="Remix" className="remix-app__header-home-link">
            <RemixLogo />
          </Link>
          <Navbar />
        </div>
      </header>
      <div className="remix-app__main">
        <div className="min-w-full remix-app__main-content">{children}</div>
      </div>
      {/* <footer className="remix-app__footer">
        <div className="container remix-app__footer-content">
          <p>&copy; jweboy!!!!</p>
        </div>
      </footer> */}
    </div>
  );
}

export default Layout