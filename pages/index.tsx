import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { MAX_WIDTH, md } from "../styles/styles";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Adam X Ego</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainWrapper>
                <section className="thumbnail-wrapper">
                    <div className="img"></div>
                </section>
                <section className="arrow-wrapper">
                    <div className="arrow-right">
                        <span className="percentage">00%</span>
                        <div className="img"></div>
                    </div>
                    <div className="arrow-left">
                        <span className="percentage">00%</span>
                        <div className="img"></div>
                    </div>
                </section>
                <section className="about-wrapper">
                    <div className="about">
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta a magni
                            neque numquam, unde, labore temporibus recusandae maxime tempora ex
                            porro aut tempore animi architecto distinctio cum. Molestias similique
                            quis quos odit numquam doloribus ex omnis culpa? Totam temporibus amet,
                            corporis a quasi laudantium commodi, sequi in omnis earum doloribus
                            recusandae illum eligendi vero nisi sed reprehenderit, dignissimos
                            repellendus. Sequi sunt repellat iusto, quaerat expedita natus
                            reiciendis facere libero ad? Modi distinctio corrupti et sapiente
                            laudantium sed iste, amet fugit.
                        </div>
                        <div className="img"></div>
                    </div>
                    <div className="about reverse">
                        <div className="img"></div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
                            voluptatum commodi itaque unde nihil. Velit consequatur neque voluptatum
                            laborum illum aut nihil quidem eum dignissimos, perspiciatis, id
                            molestias corrupti nostrum! Maxime quo porro quaerat numquam
                            necessitatibus. Quis dolor a beatae reiciendis, rerum repellendus
                            distinctio maxime quibusdam architecto doloribus voluptatem eveniet
                            laudantium officia? Qui exercitationem nulla quaerat, ratione
                            voluptatibus facilis placeat eaque fugiat delectus nihil minus
                            recusandae! Dolor nisi autem reiciendis voluptatibus incidunt at earum
                            blanditiis, fugit quis doloribus. Repudiandae, atque.
                        </div>
                    </div>
                    <div className="about">
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta a magni
                            neque numquam, unde, labore temporibus recusandae maxime tempora ex
                            porro aut tempore animi architecto distinctio cum. Molestias similique
                            quis quos odit numquam doloribus ex omnis culpa? Totam temporibus amet,
                            corporis a quasi laudantium commodi, sequi in omnis earum doloribus
                            recusandae illum eligendi vero nisi sed reprehenderit, dignissimos
                            repellendus. Sequi sunt repellat iusto, quaerat expedita natus
                            reiciendis facere libero ad? Modi distinctio corrupti et sapiente
                            laudantium sed iste, amet fugit.
                        </div>
                        <div className="img"></div>
                    </div>
                    <div className="about"></div>
                </section>
            </MainWrapper>

            <FooterWrapper>
                <p>
                    Powered by <span>© 2021 Adam X Ego Team. All rights reserved.</span>
                </p>
            </FooterWrapper>
        </>
    );
};

const MainWrapper = styled.main`
    max-width: ${MAX_WIDTH};
    margin: 0 auto;

    .thumbnail-wrapper {
        .img {
            background: url("https://via.placeholder.com/1280x640") no-repeat center/cover;
            width: 100%;
            height: 40rem;

            ${md} {
                background: url("https://via.placeholder.com/400x128") no-repeat center/cover;
                height: 8rem;
            }
        }
    }

    .arrow-wrapper {
        margin: 3rem 0;
        position: relative;
        display: flex;
        justify-content: space-between;
        min-height: 25rem;

        ${md} {
            flex-flow: column nowrap;
            justify-content: center;
            min-height: 40rem;
        }
        .arrow-right {
            flex: 0 0 30%;
            position: relative;
            display: inline-flex;
            flex-flow: column nowrap;
            gap: 2rem;
            transition: right 0.5s;
            right: 0;

            &:before {
                content: "";
                position: absolute;
                right: 4px;
                top: 15px;
                background-color: #f5c631;
                width: 6px;
                height: 26px;
                transform: rotate(140deg);
                /* transition: right 0.3s; */
                border-radius: 20px;
            }

            &:after {
                content: "";
                position: absolute;
                right: 0;
                top: 33px;
                background-color: #f5c631;
                width: 100%;
                height: 6px;
                /* transition: right 0.3s; */
            }

            &:hover {
                right: -5rem;
            }

            .img {
                background: url("https://via.placeholder.com/480") no-repeat center/cover;
                width: 100%;
                height: 100%;
            }

            ${md} {
                flex: 1;
                height: 15rem;

                &:hover {
                    right: 0;
                }
            }
        }
        .arrow-left {
            flex: 0 0 30%;
            position: relative;
            display: inline-flex;
            flex-flow: column nowrap;
            gap: 2rem;
            align-items: flex-end;
            transition: left 0.5s;
            left: 0;

            &:before {
                content: "";
                position: absolute;
                left: 4px;
                top: 15px;
                background-color: #f5c631;
                width: 6px;
                height: 26px;
                transform: rotate(40deg);
                /* transition: left 0.3s; */
                border-radius: 20px;
            }

            &:after {
                content: "";
                position: absolute;
                left: 0;
                top: 33px;
                background-color: #f5c631;
                width: 100%;
                height: 6px;
                /* transition: left 0.3s; */
            }

            &:hover {
                left: -5rem;
            }

            .img {
                background: url("https://via.placeholder.com/480") no-repeat center/cover;
                width: 100%;
                height: 100%;
            }

            ${md} {
                flex: 1;
                height: 15rem;
                margin-top: 3rem;

                &:hover {
                    left: 0;
                }
            }
        }

        .percentage {
            font-size: 1.25rem;
            font-weight: bold;
            letter-spacing: 0.01rem;
        }
    }

    .about-wrapper {
        border-top: 1px solid #f5c631;
        padding: 3rem 1.25rem 0;

        position: relative;

        ${md} {
            padding: 3rem 0 0;
        }

        .about:not(.reverse) {
            display: grid;
            grid-template-columns: 1fr 19.5rem;
            align-items: center;
            min-height: 20rem;
            gap: 2rem;

            .img {
                background: url("https://via.placeholder.com/312") no-repeat center/cover;
                height: 100%;
            }

            ${md} {
                grid-template-columns: 1fr;
                .img {
                    height: 15rem;
                }
            }
        }

        .reverse {
            display: grid;
            grid-template-columns: 19.5rem 1fr;
            align-items: center;
            min-height: 20rem;
            gap: 2rem;

            .img {
                background: url("https://via.placeholder.com/312") no-repeat center/cover;
                height: 100%;
            }

            ${md} {
                grid-template-columns: 1fr;

                > *:first-child {
                    grid-row: 1;
                }
                .img {
                    grid-row: 2;
                    height: 15rem;
                }
            }
        }

        > * + * {
            margin-top: 4rem;
        }
    }

    .roadmap-wrapper {
    }
`;

const FooterWrapper = styled.footer`
    max-width: ${MAX_WIDTH};
    margin: 0 auto;
    text-align: center;
    padding: 3rem 0;
`;

export default Home;