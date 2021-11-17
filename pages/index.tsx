import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { MAX_WIDTH, md } from "../styles/styles";
import { Discord, Kakaotalk, Twitter } from "../utils/icons";

const data = [
    { name: "Sale", value: 90 },
    { name: "Airdrop", value: 5 },
    { name: "Adam x Ego Team", value: 5 },
    // { name: "D1", value: 150 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;

const Home: NextPage = () => {
    const router = useRouter();

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }: any): JSX.Element => {
        console.log(cx, cy, percent);
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <>
            <Head>
                <title>Adam X Ego</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeaderWrapper>
                <div className="header">
                    <div className="start">
                        <Link href="#">
                            <a>
                                <h2 className="logo">ADAM X EGO</h2>
                            </a>
                        </Link>
                    </div>
                    <div className="end">
                        <Link href="#about">
                            <a>About</a>
                        </Link>
                        <Link href="#roadmap">
                            <a>Roadmap</a>
                        </Link>
                        <Link href="#gallery">
                            <a>Gallery</a>
                        </Link>
                        <Link href="#team">
                            <a>Team</a>
                        </Link>
                        <div>
                            <select
                                name="lang"
                                id="lang"
                                onChange={({ currentTarget }) => {
                                    const value =
                                        currentTarget.options[currentTarget.selectedIndex].value;
                                    router.push(router.pathname, router.pathname, {
                                        locale: value,
                                    });
                                }}
                            >
                                <option value="ko">KO</option>
                                <option value="en">EN</option>
                            </select>
                        </div>
                    </div>
                </div>
            </HeaderWrapper>

            <MainWrapper>
                <section className="thumbnail-wrapper">
                    <img src="../static/img/main.png" alt="main" />
                </section>
                {/* <section className="arrow-wrapper">
                    <div className="arrow-right">
                        <span className="percentage">00%</span> */}
                        {/* <div className="img"></div> */}
                        {/* <h2>Good</h2>
                    </div>
                    <div className="arrow-left">
                        <span className="percentage">00%</span> */}
                        {/* <div className="img" id="about"></div> */}
                        {/* <h2>Evil</h2>
                    </div>
                </section> */}
                <section id="about" className="about-wrapper" style={{ borderTop: "none"}}>
                    <div className="about">
                        <div>
                            <h1 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                                {router.locale === "ko" ? "History" : "History"}
                            </h1>
                            <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                                {router.locale === "ko" ? (
                                    <>
                                        아담이 사과를 한 입 베어 무는 순간, 어떤 일이 펼쳐질 지 그는
                                        전혀 짐작하지 못했다.
                                        <br /> 그 사과로 인해 아담의 후손들의 Ego는 선과 악으로
                                        나뉘었고, 더이상 Ego를 통제 할 수 없게 되면서 선과 악을
                                        따르는 추종자들의 역사가 시작되었다.
                                        <br /> 그리고 선과 악의 대립은 결국 전쟁의 서사를 쓰게 된다.
                                    </>
                                ) : (
                                    <>
                                        The moment Adam took a bite of the apple, he had no idea what would happen.
                                        <br /> Because of the apple, The EGO of Adam's descendants was divided into good and evil.
                                        <br /> As the Ego was no longer controllable, the history of the good and evil followers has begun.
                                        <br /> And the confrontation between good and evil eventually writes a narrative of war.
                                    </>
                                )}
                            </p>
                        </div>
                        {/* <div className="img"></div> */}
                    </div>
                    <div className="about reverse">
                        {/* <div className="img"></div> */}
                        <div>
                            <h1 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Adam</h1>
                            <p id="roadmap" style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                                {router.locale === "ko" ? (
                                    <>
                                        576개의 Pixel로 이루어지고 고유의 Item을 장착한 Generative art ‘Adam
                                        X Ego’는 각각 다른 10,000명으로 탄생한 고유의 인물입니다.
                                        <br /> 5,000명의 선한 정체성, 5,000명의 악한 정체성으로 탄생한 ‘Adam
                                        X Ego’는 클레이튼 블록체인에서 공식적으로 소유할 수 있습니다.
                                        <br /> 각각의 아담은 착용한 아이템에 따라 랭크가 정해집니다.
                                    </>
                                ) : (
                                    <>
                                        Generative art "Adam X Ego”, which is consisted of 576 pixels and equipped with unique items, has its 10,000 characteristic figures.
                                        <br /> “Adam X Ego” is created with 5,000 good identities and 5,000 evil identities, and it can be officially owned at Clayton Blockchain.
                                        <br /> The rank of each Adam will be determined in accordance with the items worn.
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                    {/* <div className="about">
                        <div style={{ lineHeight: "1.5" }}>
                            <h1 style={{ marginBottom: "1.25rem" }}>War System</h1>
                            {router.locale === "ko" ? (
                                <>
                                    <p style={{ fontSize: "1rem", lineHeight: "2" }}>
                                        - Rule 
                                        <br /> 일정 시간까지 총 Volume 이 높은 Ego team 이 승리 합니다. 매
                                        전쟁이 종료된 뒤 Token 응모를 통해 전리품을 획득할 수 있습니다.
                                    </p>
                                    <p style={{ fontSize: "1rem", lineHeight: "2" }}>
                                        - Token distribution 
                                        <br /> 전쟁에 참여하는 1 Adam 당 1 Apple token 지급
                                    </p>
                                    <p id="roadmap" style={{ fontSize: "1rem", lineHeight: "2" }}>
                                        - Ceremony 
                                        <br /> 우승한 Ego team 에게는 전리품 응모 권한이 생깁니다.
                                        소유한 Token 최대 갯수만큼 응모할 수 있습니다. (전리품은 매 전쟁
                                        시작 전에 공지 됩니다.)
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p style={{ fontSize: "1rem", lineHeight: "2" }}>
                                        - Rule 
                                        <br /> The Ego team with a higher total Volume wins after the certain time.
                                        After every war ends, you can obtain trophy or item through Token event.
                                    </p>
                                    <p style={{ fontSize: "1rem", lineHeight: "2" }}>
                                        - Token distribution 
                                        <br /> 1 Apple token per Adam participating in the war.
                                    </p>
                                    <p id="roadmap" style={{ fontSize: "1rem", lineHeight: "2" }}>
                                        - Ceremony 
                                        <br /> The winning Ego team will obtain the chance to apply for the trophy or item 
                                        You can apply as many as the number of Token you own.
                                        (The trophy or item will be announced before every war begins.)
                                    </p>
                                </>
                            )} */}

                            {/* <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                                - Rule 일정 시간까지 총 Volume 이 높은 Ego team 이 승리 합니다. 매
                                전쟁이 종료된 뒤 Token 응모를 통해 전리품을 획득할 수 있습니다.
                            </p>
                            <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                                - Token distribution 전쟁에 참여하는 1 Adam 당 1 Apple token 지급
                            </p>
                            <p id="roadmap" style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                                - Ceremony 우승한 Ego team 에게는 전리품 응모 권한이 생깁니다.
                                소유한 Token 최대 갯수만큼 응모할 수 있습니다. (전리품은 매 전쟁
                                시작 전에 공지 됩니다.)
                            </p> */}
                            {/* <p id="roadmap" style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                                - buyback (커뮤니티 쪽에서 언급) 일정 수량의 nft를 바이백 하여 추후
                                에어드랍으로 증정
                            </p> */}

                        {/* </div>
                    </div> */}
                </section>
                <section className="roadmap-wrapper">
                    <h1 style={{ marginBottom: "1rem" }}>Roadmap</h1>
                    <p style={{ marginBottom: "2.5rem", lineHeight: "1.5" }}>
                        {router.locale === "ko" ? (
                            <>
                                Adam X Ego 로드맵은 각 목표단계에 도달하면 다음 단계를 진행하는 것입니다.
                                <br />
                                또한 장기적인 프로젝트를 목표로 하고 있으니 지켜봐주시면 감사하겠습니다.
                            </>
                        ) : (
                            <>
                                The roadmap of Adam X Ego is to proceed to the next step once you reach each target step.
                                <br />
                                Also, we are planning for a long-term project, so it would be appreciated if you could keep an eye on our project.
                            </>
                        )}
                    </p>
                    <div className="content">
                        <div className="item">
                            <div className="text">
                                <h3>{router.locale === "ko" ? "애플토큰" : "Apple Token"}</h3>
                                <p>
                                    {router.locale === "ko" ? (
                                        <>
                                            애플토큰을 활용한 로터리 시스템 개발
                                            <br />애플토큰은 향후 모든 Adam X
                                            Ego 프로젝트에서 사용 예정
                                        </>
                                    ) : (
                                        <>
                                            Developing a rotary system 
                                            <br /> using Apple Token
                                            <br /> Apple Token will be used in all future projects of Adam X Ego.
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="text">
                                <h3>{router.locale === "ko" ? "홀더 우대" : "Holder benefits"}</h3>
                                <p>
                                    {router.locale === "ko" ? (
                                        <>
                                            홀더 기반 거버넌스 
                                            <br /> 커뮤니티 투표 시스템 개발
                                        </>
                                    ) : (
                                        <>
                                            Holder-based governance 
                                            <br /> Developing community voting system.
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="text">
                                <h3>{router.locale === "ko" ? "기부" : "Donation"}</h3>
                                <p>
                                    {router.locale === "ko" ? (
                                        <>
                                            매 분기마다 일정 수익을 기부
                                            <br /> ( 단체는 매번 상이할 수 있음 )
                                        </>
                                    ) : (
                                        <>
                                            Donate a certain amount of profit every quarter. 
                                            <br /> (The donor recipients can be different every time.)
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                        {/* <div className="item">
                            <div className="text">
                                <h3>협업</h3>
                                <p>타 프로젝트 팀과 콜라보 혹은 파트너쉽 체결</p>
                            </div>
                        </div> */}
                        <div className="item">
                            <div className="text" id="gallery">
                                <h3>V2</h3>
                                <p>
                                    {router.locale === "ko" ? (
                                        <>
                                            버젼 2를 통한 생태계 확장과 글로벌 시장 공략
                                        </>
                                    ) : (
                                        <>
                                            Expanding the ecosystem and targeting global markets through Version 2.
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="gallery-wrapper">
                    <div className="content">
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                    </div>
                </section>
                <section className="chart-wrapper">
                    {/* <div> */}
                    <h1 style={{ marginBottom: "1rem" }}>{router.locale === "ko" ? "NFT 분배" : "NFT Distribution"}</h1>
                    <div></div>
                        <p style={{ fontSize: "1.2rem", lineHeight: "1.5" }}>
                            {router.locale === "ko" ? (
                                <>
                                    ADAM X EGO NFT는 아래와 같이 배포됩니다. 
                                </>
                            ) : (
                                <>
                                    ADAM X EGO NFT are distributed as follows.
                                </>
                            )}
                        </p>
                    <div></div>
                        <p style={{ fontSize: "1.5rem", lineHeight: "1.5" }}>
                            Team : 500 Adam x Ego
                            <br /> Airdrop : 500 Adam x Ego
                            <br /> Sale : 9,000 Adam x Ego
                        </p>
                        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam unde
                        reprehenderit maxime quidem, delectus molestias veniam? Quae odit iure eaque
                        eum autem incidunt aperiam sunt, neque odio illum nemo nobis voluptatem
                        ducimus dolores enim molestiae commodi impedit corrupti non animi alias
                        quidem delectus doloremque accusamus! Temporibus sed voluptates aliquid
                        obcaecati doloribus modi explicabo, facilis soluta consequuntur alias
                        officiis maxime voluptatum possimus assumenda dignissimos est exercitationem
                        nihil animi. Obcaecati nihil ipsa laudantium accusamus sit, rem iste quas,
                        doloribus sunt pariatur dolorum. */}
                    {/* </div> */}
                    <ResponsiveContainer width="100%" height="100%" id="team">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={90}
                                label={({ percent }) => `TEXT ${(percent * 100).toFixed(0)}%`}
                                labelLine={false}
                            >
                                {data.map((_, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </section>
                <section className="team-wrapper">
                    <h1>Team</h1>
                    <div className="content">
                        <div className="profile">
                            <div className="img"></div>
                            <p className="title">
                                <b>Eden</b>
                                <br />
                                <small>Developer</small>
                            </p>
                            {/* <p className="description">
                                adam 캐릭터의 배경이 되었습니다. <br />
                                ntf 수집을 좋아합니다.
                            </p> */}
                        </div>
                        <div className="profile">
                            <div className="img"></div>
                            <p className="title">
                                <b>Dotty</b>
                                <br />
                                <small>Artist</small>
                            </p>
                            {/* <p className="description">
                                미쳤습니다. 괴상한 그의 손가락에선 어떤 것이 나올 지 모릅니다.
                                <br /> 젤리를 좋아합니다.
                            </p> */}
                        </div>
                        <div className="profile">
                            <div className="img"></div>
                            <p className="title">
                                <b>Mada</b>
                                <br />
                                <small>Advisor</small>
                            </p>
                            {/* <p className="description">
                                adam x ego의 고문을 담당합니다.
                                <br /> 정말 고통스럽게 합니다.
                            </p> */}
                        </div>
                        <div className="profile">
                            <div className="img"></div>
                            <p className="title">
                                <b>Gabriel</b>
                                <br />
                                <small>Marketer</small>
                            </p>
                            {/* <p className="description">
                                평화를 좋아합니다. <br />
                                언제나 모든 인류가 평화롭길 원합니다.
                            </p> */}
                        </div>
                        <div className="profile">
                            <div className="img"></div>
                            <p className="title">
                                <b>Lucifer</b>
                                <br />
                                <small>Marketer</small>
                            </p>
                            {/* <p className="description">
                                언제나 악마같은 냉혹함을 토대로 nft, 블록체인 및 실물자산등 투자를
                                전문으로 합니다.
                            </p> */}
                        </div>
                    </div>
                </section>
            </MainWrapper>

            <FooterWrapper>
                <p>
                    Powered by <span>© 2021 Adam X Ego Team. All rights reserved.</span>
                </p>
                <p className="icon-container">
                    {/* <Link href="#">
                        <a>
                            <Discord width="1.5rem" height="1.5rem" />
                        </a>
                    </Link>
                    <Link href="#">
                        <a>
                            <Kakaotalk width="1.5rem" height="1.5rem" />
                        </a>
                    </Link> */}
                    <Link href="#">
                        <a href="https://twitter.com/adamxego" target="_blank">
                            <Twitter width="1.5rem" height="1.5rem" />
                        </a>
                    </Link>
                </p>
            </FooterWrapper>
        </>
    );
};

const Fade = keyframes`
    from {
     opacity: 0;   
    }
    to {
        opacity: 1;
    }
`;

const HeaderWrapper = styled.header`
    max-height: 3.75rem;
    width: 100%;

    margin: 0 auto;

    position: fixed;
    z-index: 1;

    background-color: rgba(18, 18, 18, 1);

    ${md} {
        padding: 0 1rem;
    }

    > .header {
        max-width: ${MAX_WIDTH};
        width: 100%;
        height: 3.75rem;

        margin: 0 auto;
        padding: 0 1rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

        ${md} {
            padding: 0;
            margin: 0;
        }

        > div {
            display: inline-flex;
            flex-flow: row nowrap;

            gap: 1.5rem;

            font-size: 1.25rem;

            ${md} {
                font-size: 0.875rem;
                gap: 0.5rem;
            }
        }

        .logo {
            ${md} {
                font-size: 0.875rem;
            }
        }

        select {
            cursor: pointer;
            border: none;
            outline: none;
            color: #ffffff;
            font-size: 0.975rem;

            line-height: 1.5em;
            padding-right: 1rem;
            display: inline-block;
            background-color: transparent;

            margin: 0;
            box-sizing: border-box;

            ${md} {
                font-size: 0.75rem;
                padding-right: 0.125rem;
                background-color: #ffffff;
                color: #000000;
            }
        }
    }
`;

const MainWrapper = styled.div`
    max-width: ${MAX_WIDTH};
    margin: 0 auto;
    padding-top: 3.75rem;

    ${md} {
        padding: 3.75rem 1rem 0;
    }

    section > h1 {
        margin-bottom: 5rem;
        font-size: 2rem;
        letter-spacing: 0.02rem;

        ${md} {
            margin-bottom: 2rem;
        }
    }

    .thumbnail-wrapper {
        img {
            object-fit: contain;
            width: 100%;
        }
    }

    .arrow-wrapper {
        margin: 3rem 0;
        position: relative;
        display: flex;
        justify-content: space-between;
        min-height: 5rem;

        ${md} {
            flex-flow: column nowrap;
            justify-content: center;
            min-height: 10rem;
        }
        .arrow-right {
            flex: 0 0 30%;
            position: relative;
            display: inline-flex;
            flex-flow: column nowrap;
            gap: 2rem;
            transition: margin-left 0.5s;
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

            .img {
                background: url("/static/img/eve.png") no-repeat center/cover;
                width: 100%;
                height: 100%;
            }

            &:hover {
                /* right: -5rem; */
                margin-left: 5rem;
                .img {
                    background: url("https://via.placeholder.com/480") no-repeat center/cover;
                    animation: ${Fade} 1s linear;
                }
            }

            h2 {
                font-size: xx-large;
                font-weight: 600;
                letter-spacing: 0.5rem;
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

            .img {
                background: url("/static/img/devil.png") no-repeat center/cover;
                width: 100%;
                height: 100%;
            }

            &:hover {
                left: -5rem;

                .img {
                    background: url("https://via.placeholder.com/480") no-repeat center/cover;
                    animation: ${Fade} 1s linear;
                }
            }

            h2 {
                font-size: xx-large;
                font-weight: 600;
                letter-spacing: 0.5rem;
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
        padding: 3rem 1.25rem;

        position: relative;

        ${md} {
            padding: 3rem 0;
        }

        .about:not(.reverse) {
            display: grid;
            grid-template-columns: 1fr;
            align-items: center;
            min-height: 10rem;
            gap: 2rem;
            padding: 0 2rem;
            ${md} {
                padding: 0;
            }

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
            grid-template-columns: 1fr;
            align-items: center;
            min-height: 20rem;
            gap: 2rem;
            padding: 0 2rem;
            ${md} {
                padding: 0;
            }

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

        /* > * + * {
            margin-top: 1rem;
        } */
    }

    .roadmap-wrapper {
        border-top: 1px solid #f5c631;
        padding: 3rem 1.25rem;

        position: relative;

        > .content {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 1rem;

            .item {
                .img {
                    background: url("https://via.placeholder.com/224") no-repeat center/cover;
                    width: 100%;
                    height: 14rem;

                    margin-bottom: 1rem;
                }

                .text {
                    text-align: center;
                    word-break: keep-all;
                    line-height: 1.5;

                    > h3 {
                        margin-bottom: 1rem;
                    }

                    > p {
                        line-height: 1.5;
                    }
                }
            }

            ${md} {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
        }
        ${md} {
            padding: 3rem 0;
        }
    }

    .gallery-wrapper {
        border-top: 1px solid #f5c631;
        padding: 4rem 1.25rem;

        position: relative;

        .content {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 1rem;

            padding: 0 12.5rem;

            .img {
                width: 100%;
                height: 200px;
                background: url("../static/img/sample.png") no-repeat center/contain;
            }
            ${md} {
                grid-template-columns: 1fr 1fr;
                padding: 0 2rem;

                .img {
                    height: 8rem;
                    background: url("../static/img/sample.png") no-repeat center/contain;
                }
            }
        }

        ${md} {
            padding: 4rem 0;
        }
    }

    .chart-wrapper {
        border-top: 1px solid #f5c631;
        padding: 4rem 1.25rem;

        position: relative;

        display: grid;
        grid-template-columns: 1.25fr 0.75fr;
        align-items: center;

        ${md} {
            grid-template-columns: 1fr;
        }

        > div:last-child {
            min-height: 20rem;
        }
    }

    .team-wrapper {
        border-top: 1px solid #f5c631;
        padding: 3rem 1.25rem;

        position: relative;

        ${md} {
            padding: 3rem 0;
        }

        .content {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            gap: 1rem;

            ${md} {
                grid-template-columns: 1fr 1fr;
            }
            .profile {
                display: inline-flex;
                flex-flow: column nowrap;
                align-items: center;
                gap: 0.875rem;

                .img {
                    background: url("https://via.placeholder.com/224") no-repeat center/cover;
                    width: 100%;
                    height: 14rem;
                }

                .title {
                    font-size: 1.25rem;
                    text-align: center;
                    ${md} {
                        font-size: 1rem;
                    }
                }

                .description {
                    font-size: 1rem;
                    text-align: center;
                    word-break: keep-all;
                    ${md} {
                        font-size: 0.875rem;
                    }
                }
            }
        }
    }
`;

const FooterWrapper = styled.footer`
    max-width: ${MAX_WIDTH};
    margin: 0 auto;
    text-align: center;
    padding: 3rem 0;

    ${md} {
        padding: 3rem 1rem;
    }

    .icon-container {
        margin-top: 1rem;

        > * + * {
            margin-left: 1rem;
        }
    }
`;

export default Home;
