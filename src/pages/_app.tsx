import "../styles/global.css";

import {ChallengesProvider} from "../contexts/ChallengeContext";
import {CountdownProvider} from "../contexts/CountdownContext";
import {Head} from "next/document";

function MyApp({Component, pageProps}) {
    return (
        <>
                <Component {...pageProps} />
        </>
    )
}

export default MyApp;
