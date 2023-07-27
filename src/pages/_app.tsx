import App, { AppContext, AppProps } from 'next/app';
import { ReactElement, ReactNode, useEffect } from 'react';
import { configureChains, createConfig } from 'wagmi'
import { mainnet, polygon, optimism } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import "@rainbow-me/rainbowkit/styles.css";


import { InjectedConnector } from 'wagmi/connectors/injected'
import Head from 'next/head';
import Layout from 'src/layouts';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import WebApp from "@twa-dev/sdk"


type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
    Component: NextPageWithLayout;
}




const {chains, publicClient, webSocketPublicClient, providers }:any = configureChains(
    [mainnet],
    [publicProvider()],
  )


  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'ts-nextjs-tailwind-starter',
    chains
  });

  const config = createConfig({
    publicClient,
    webSocketPublicClient,
    connectors
  })
   
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

            if (idGame) {
                WebApp.default.BackButton.show()
            }
            else {
                WebApp.default.BackButton.hide()
            }
            WebApp.default.expand()
            WebApp.default.onEvent('backButtonClicked', () => router.push('/'))

        })()
    }, [idGame])

    return (
        <WagmiConfig config={config}>
            <RainbowKitProvider chains={chains} modalSize="compact" >
                <>
                    <Head>
                        <meta charSet="UTF-8" />
                        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="initial-scale=1, width=device-width" />
                        <title>Games</title>
                    </Head>

                    <Layout>{getLayout(<Component {...pageProps} />)}</Layout>

                </>
            </RainbowKitProvider>
        </WagmiConfig>
    );
}


MyApp.getInitialProps = async (context: AppContext) => {
    const appProps = await App.getInitialProps(context);
    return {
        ...appProps,
    };
};


// owner slot program worry stand bag expose alert chuckle bargain tape car