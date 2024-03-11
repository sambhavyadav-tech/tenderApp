// Navbar.jsx

import React from 'react';
import Link from "next/link"
import Head from 'next/head';

const CustomNavbar = () => {
    return (
        <div>
            <Head>
                <title>Tender App</title>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
            </Head>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link href="/" className="navbar-brand">Tender App
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/admin/tenders" className="nav-link">Admin
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/user/apply" className="nav-link">Apply
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container mt-4"></div>
        </div>
    )
};

export default CustomNavbar;
