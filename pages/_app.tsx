import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, MAX_WIDTH } from "../styles/styles";
import themes from "../styles/themes";
import AOS from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(
        () =>
            AOS.init({
                disable: () => {
                    const maxWidth = 1280;
                    return window.innerWidth < maxWidth;
                },
            }),
        []
    );
    return (
        <ThemeProvider theme={themes["dark"]}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
export default MyApp;
