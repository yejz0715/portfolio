import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`

${reset}


@font-face {
    font-family: 'GangwonEdu_OTFLightA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFLightA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'GangwonEdu_OTFBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

a{
  text-decoration: none;
  color: #333;
}

body{
  width:100vw;
  height: 100vh;
  color: #333;
  font-family: 'GangwonEdu_OTFLightA';
  font-weight: 600;
  background-color:#fafafa;
}
`;
