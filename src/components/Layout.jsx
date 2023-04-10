import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

function Layout() {
  return (
    <>
      <Head>
        <title>Guitar Picks</title>
        <meta name="description" content="photo sharing site" />
      </Head>
      <header className="top-0 flex justify-between p-8 items-center sticky bg-gray-400">
        <Link href="#">
          <h1 className="text-3xl">Guitar Picks</h1>
        </Link>
        <nav className="">
          <Link href="#">
            <button>
              <h2 className="text-xl">Account</h2>
            </button>
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Layout;
