import { createGlobalStyle } from "styled-components";
import PrimaryFont1 from './YesevaOneRegular.woff'
import PrimaryFont2 from './YesevaOneRegular.woff2'
import SecondaryFont1 from './JosefinSans.woff'
import SecondaryFont2 from './JosefinSans.woff2'

export default createGlobalStyle`
@font-face {
    font-family: 'YesevaOne';
    src:local('YesevaOne'), local('YesevaOne'),
    url(${PrimaryFont1}) format('woff2'),
    url(${PrimaryFont2}) format('woff');
    
}
@font-face {
    font-family: 'JosefinSans';
    src:local('JosefinSans'), local('JosefinSans'),
    url(${SecondaryFont1}) format('woff2'),
    url(${SecondaryFont2}) format('woff');
    
}

`