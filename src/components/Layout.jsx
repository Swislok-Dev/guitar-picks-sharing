import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import Modal from './Modal';

function Layout({ children }) {
  const [show, setShow] = useState(false);
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
          <button onClick={() => setShow(true)}>
            <h2>Account</h2>
          </button>
          <Modal
            title="Account Details"
            content="Content here"
            onClose={() => setShow(false)}
            show={show}
          />
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
