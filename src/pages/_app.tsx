import App, { AppContext, AppProps } from 'next/app';
import { ReactElement, ReactNode, useEffect } from 'react';

import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from 'src/layouts';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import WebApp from '@twa-dev/sdk';


type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
    Component: NextPageWithLayout;
}

const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';


export default function MyApp(props: MyAppProps) {
    const { Component, pageProps } = props;
    const router = useRouter();
    const getLayout = Component.getLayout ?? ((page: any) => page);

    const idGame = router.query.gameId
    const path = router.asPath 


    useEffect(() => {
    }, [router.locale]);






    useEffect(() => {
        (async () => {
            const WebApp: any = await import("@twa-dev/sdk")
            WebApp.default.enableClosingConfirmation()
            console.log(idGame)
            
            if(idGame || path=='/wallet' || path == '/withdrawal'){
                WebApp.default.BackButton.show()
            }
            else{
                WebApp.default.BackButton.hide()
            }
            console.log(WebApp.default.initData)
            WebApp.default.expand()
            WebApp.default.onEvent('backButtonClicked', () => router.push('/'))
       

        })()
    }, [idGame,path])

    return (
        <TonConnectUIProvider manifestUrl={manifestUrl}>
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>Games</title>
            </Head>

            <Layout>{getLayout(<Component {...pageProps} />)}</Layout>

        </>
        </TonConnectUIProvider>
    );
}


MyApp.getInitialProps = async (context: AppContext) => {
    const appProps = await App.getInitialProps(context);
    return {
        ...appProps,
    };
};
