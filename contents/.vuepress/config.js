const CONST = require("./const")

module.exports = {
    base: "/TIL/", // base url을 설정합니다.
    title: `제제의 짧은 회고`,
    description: `매일 혹은 매주 혹은 매월 무엇을 배웠는지 가볍게 써내려가는 제제의 짧은 회고`,
    dest: "build",
    head: [
        ["link", { rel: "icon", href: "/logo.png" }],
        ["link", { rel: "icon", href: "favicon.ico", type: "image/x-icon" }],
        ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Song+Myung" }],
    ], // html head에 넣을 값들을 설정
    themeConfig: {
        smoothScroll: true,
        nav: [
            // 페이지 우측 상단에 보여질 nav들
            { text: "📦 깃허브", link: "https://github.com/jejecrunch/" },
            { text: "🔍 블로그", link: "https://dev-jejecrunch.tistory.com/" },
        ],
        sidebar: {
            "/": [
                {
                    title: "매일 회고록",
                    collapsable: true,
                    children: CONST.TILList,
                },
                {
                    title: "매주 회고록",
                    children: CONST.WILList,
                },
                {
                    title: "매월 회고록",
                    children: CONST.MILList,
                },
            ],
        },
    },
}
