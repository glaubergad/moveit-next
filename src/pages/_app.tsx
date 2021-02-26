import "../styles/global.css";

import {ChallengesProvider} from "../contexts/ChallengeContext";
import {CountdownProvider} from "../contexts/CountdownContext";
import {Head} from "next/document";

function MyApp({Component, pageProps}) {
    return (
        <>
            <ChallengesProvider>
                <Component {...pageProps} />
            </ChallengesProvider>
        </>
    )
}

export default MyApp;
