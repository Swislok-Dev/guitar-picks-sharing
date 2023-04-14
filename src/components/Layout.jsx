import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Guitar Picks</title>
        <meta name="description" content="photo sharing site" />
      </Head>
      <div className="bg"></div>
      <header className="z-10 top-0 flex justify-between p-6 items-center sticky bg-gray-400">
        <Link href="/">
          <h1>Guitar Picks</h1>
        </Link>
        <nav className="">
          <Link href="#">
            <h2>Account</h2>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
