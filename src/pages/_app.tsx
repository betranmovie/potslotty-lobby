import App, { AppContext, AppProps } from 'next/app';
import { ReactElement, ReactNode, useEffect } from 'react';

import Head from 'next/head';
import Layout from 'src/layouts';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import WebApp from "@twa-dev/sdk";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
    Component: NextPageWithLayout;
}



export default function MyApp(props: MyAppProps) {
    const { Component, pageProps } = props;
    const router = useRouter();
    const getLayout = Component.getLayout ?? ((page: any) => page);

    const idGame = router.query.gameId


    useEffect(() => {
    }, [router.locale]);


    useEffect(() => {
        (async () => {
            const WebApp: any = await import("@twa-dev/sdk")
            WebApp.default.enableClosingConfirmation()
            console.log(idGame)
            
            if(idGame){
                WebApp.default.BackButton.show()
            }
            else{
                WebApp.default.BackButton.hide()
            }
            WebApp.default.expand()
            WebApp.default.onEvent('backButtonClicked', () => router.push('/'))

        })()
    }, [idGame])

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>Games</title>
            </Head>

            <Layout>{getLayout(<Component {...pageProps} />)}</Layout>

        </>
    );
}


MyApp.getInitialProps = async (context: AppContext) => {
    const appProps = await App.getInitialProps(context);
    return {
        ...appProps,
    };
};
