import {CompletedChallenges} from "../components/CompletedChallenges";
import {Countdown} from "../components/Countdown";
import {ExperienceBar} from "../components/ExperienceBar";
import {Profile} from "../components/Profile";
import {GetServerSideProps} from "next";

import styles from "../styles/pages/Home.module.css";
import {ChallengeBox} from "../components/ChallengeBox";
import {CountdownProvider} from "../contexts/CountdownContext";
import Head from "next/head";
import {ChallengesProvider} from "../contexts/ChallengeContext";

interface HomeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Home(props: HomeProps) {
    return (
        <ChallengesProvider
        level = {props.level}
        currentExperience = {props.currentExperience}
        challengesCompleted = {props.challengesCompleted}
        >
            <div className={styles.container}>
                <Head>
                    <title>Move.it | Início </title>
                </Head>
                <ExperienceBar/>

                <CountdownProvider>
                    <section>
                        <div>
                            <Profile/>
                            <CompletedChallenges/>
                            <Countdown/>
                        </div>

                        <div>
                            <ChallengeBox/>
                        </div>
                    </section>
                </CountdownProvider>
            </div>
        </ChallengesProvider>
    );
}

//Executa no momento da renderização do site para entregar a página pronta com os dados necessários
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted)
        }
    }
}
