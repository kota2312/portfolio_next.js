import React from "react";
//import Head from 'next/head';

export default function Head() {
    const text = {
        title: 'Takahashi kota Portfolio',
        desctiption: 'Takahashi Kotaのポートフォリオです。'
    };

    return (
        <Head>
            <title>{ text.title }</title>
            <meta name="description" content={ text.desctiption } />
        </Head>
    )
}