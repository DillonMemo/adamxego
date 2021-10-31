import { createGlobalStyle, DefaultTheme } from "styled-components";
import themes from "./themes";

export const MAX_WIDTH = "1280px";
export const { xxxs, xxs, xs, sm, md, lg, xl, xxl, xxxl, xxxxl } = {
    xxxs: "@media (max-width: 20rem)", // 320px
    xxs: "@media (max-width: 32rem)", // 512px
    xs: "@media (max-width: 38rem)", // 608px
    sm: "@media (max-width: 48rem)", // 768px
    md: "@media (max-width: 62rem)", // 992px
    lg: "@media (max-width: 64rem)", // 1024px
    xl: "@media (max-width: 80rem)", // 1280px
    xxl: "@media (max-width: 90rem)", // 1440px
    xxxl: "@media (max-width: 120rem)", // 1920px
    xxxxl: "@media (max-width: 160rem)", // 2560px
};

export type Theme = keyof typeof themes;

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    *::placeholder {
      color: #C5C5C5 !important;
    }
    body {
        overscroll-behavior: auto;
        user-select: none;
        background: ${({ theme }: any) => theme.body};
        color: ${({ theme }) => theme.text};
        /* transition: background 0.2s ease-in, color 0.2s ease-in; */
    }
    /* 모든 폰트가 'Noto Sans KR'에서 영문과 숫자만 'Roboto'로 적용 */
    /* @font-face {
      font-family: 'Roboto';
      font-style: normal;
      src: local('*'),
      url('/static/font/Roboto-Regular.ttf') format('truetype'),
      url('/static/font/Roboto-Bold.ttf') format('truetype'),
      url('/static/font/Roboto-Thin.ttf') format('truetype');
      unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    } */
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.text};
      transition: color 0.3s;
    }
    a:hover {
      color: ${({ theme }) => theme.hover}
    }
    ul {
      list-style: none;
    }
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      color: inherit;
    }
    p {
        margin: 0;
        padding: 0;
    }
    /** 스크롤바 커스텀 */
    ::-webkit-scrollbar {
        width: 2px;
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(34, 45, 50, 0.5);
    }
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(34, 45, 50, 1);
    }
    /** antd 커스텀 */
    .ant-select {
      color: ${({ theme: { text } }) => text}
    }
    .ant-select-arrow {
      color: ${({ theme: { text } }) => text};
    }
`;
