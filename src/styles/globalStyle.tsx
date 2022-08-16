import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    ${reset}
    :root {
      --color-background: #e5e5e5;
      --color-enabled: #c1deae;
      --color-enabled-dark: #b6eb7a;
      --color-disabled: #888888;
      --color-active: #fff;
      --color-deep-bg: #637d59;
      font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }

    button {
      background: inherit;
      border: none;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
      overflow: visible;
      cursor: pointer;
      font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }

    a {
      text-decoration: none;
      color: #888888;
    }

    input:focus {
      outline: 0;
    }

    .ir {
      width: 1px;
      height: 1px;
      margin: -1px;
      position: absolute;
      overflow: hidden;
      clip: rect(1px 1px 1px 1px);
    }
`;
