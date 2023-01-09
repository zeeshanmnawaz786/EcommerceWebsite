import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + "- Amazona" : "Amazona"}</title>
        <meta name="description" content="Ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        {/* ====== Header Start ======== */}
        <header>
          <nav className="flex justify-between p-4 px-6  shadow-md">
            <Link href="/">
              <span className="text-lg font-bold">Amazona</span>
            </Link>
            <div className="flex mt-1">
              <Link href="/">
                <span className="mx-2">Cart</span>
              </Link>
              <Link href="/">
                <span className="mx-2">Login</span>
              </Link>
            </div>
          </nav>
        </header>
        {/* ====== Header End======== */}

        {/* ====== Main Start ======== */}

        <main className=" px-4 pt-4 bg-slate-200">{children}</main>

        {/* ====== Main End ======== */}

        {/* ====== Footer Start ======== */}

        <footer className="flex justify-center h-12 items-center shadow-inner">
          <div>Copyright © 2023</div>
        </footer>

        {/* ====== Footer End ======== */}
      </div>
    </>
  );
}
