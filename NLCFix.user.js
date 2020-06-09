// ==UserScript==
// @name         NLC 글 표시 수
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  NLC用 게시판 글 수 고정
// @author       와타나베요오시
// @match        https://cafe.naver.com/ArticleList.nhn?search.clubid=25714841*
// @grant        none
// ==/UserScript==

const insert = "&userDisplay=50"
if (window.top !== window.self && !window.location.href.match(/&userDisplay=50/))
{
    window.location.replace(window.location.href + insert)
    console.log("50개로 변경하였습니다.")
    return
}
