import React from "react";
import {ThemeProvider} from "styled-components";
import {CSSReset} from "../src/components/CSSReset";
import ColorModeProvider ,{ColorModeContext} from "../src/components/Menu/components/ColorMode";

//_app.js -> Definições globais do NextJS
// ThemeProvider
const theme = {
    light: {
        backgroundBase: "#F9F9F9",
        backgroundLevel1: "#FFFFFF",
        backgroundLevel2: "#F0F0F0",
        borderBase: "#F0F0F0",
        textColorBase: "#222222"
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF"
    }
}

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"light"}>
            {props.children}
        </ColorModeProvider>
    )
}

function Myapp({ Component, pageProps}) {
    const contexto = React.useContext(ColorModeContext);
    console.log(contexto.mode);

    return (
            <ThemeProvider theme = {theme[contexto.mode]}>
                <CSSReset/>
                <Component {...pageProps} />
            </ThemeProvider>
    )
}

export default function _App(props) {
    return (
        <ProviderWrapper>
            <Myapp {...props}/>
        </ProviderWrapper>
    )
};
