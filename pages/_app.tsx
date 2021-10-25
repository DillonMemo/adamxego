import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/styles";
import themes from "../styles/themes";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={themes["dark"]}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
export default MyApp;
