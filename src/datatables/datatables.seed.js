const rawdata = require('./datatables.rawdata.books');
const columns = [
    {
        title: "번호"
    },
    {
        title: "책 이름"
    },
    {
        title: "저자"
    },
    {
        title: "출판사"
    }, 
    {
        title: "읽은 해"
    },
    {
        title: "바로 가기"
    }
];
const dataSet = rawdata.reduce((acc, curr, idx) => {
    const arr = [];
    const {title, author, publisher} = curr;
    arr.push(idx);
    arr.push(title.replace(/\(.+?\)/g, " "));
    arr.push(author.includes('|') ? author.split('|')[0] : author);
    arr.push(publisher);
    arr.push('');
    arr.push('');
    acc.push(arr);
    return acc;
}, [])

// var dataSet = [
//         [
//             "클린 코드를 위한 테스트 주도 개발",
//             "해리 J.W 퍼시벌",
//             "인사이트",
//             "2018",
//             "http://github.com/portfolio-y0711/2020_tdd",
//         ],
//         [
//             "테스트 주도 개발로 배우는 객체 지향 설계와 실천",
//             "Manager",
//             "BJ 퍼블릭",
//             "2017",
//             "http://github.com/portfolio-y0711/2020_tdd",
//         ],
//         [
//             "테스트 주도 개발로 배우는 객체 지향 설계와 실천",
//             "Manager",
//             "BJ 퍼블릭",
//             "2017",
//             "http://github.com/portfolio-y0711/2020_tdd",
//         ],
//         [
//             "테스트 주도 개발로 배우는 객체 지향 설계와 실천",
//             "Manager",
//             "BJ 퍼블릭",
//             "2017",
//             "http://github.com/portfolio-y0711/2020_tdd",
//         ],
//         [
//             "테스트 주도 개발로 배우는 객체 지향 설계와 실천",
//             "Manager",
//             "BJ 퍼블릭",
//             "2017",
//             "",
//             "http://github.com/portfolio-y0711/2020_tdd",
//         ],
//         [
//             "테스트 주도 개발로 배우는 객체 지향 설계와 실천",
//             "Manager",
//             "BJ 퍼블릭",
//             "2017",
//             "http://github.com/portfolio-y0711/2020_tdd",
//         ],
// ];

// const data = {
//     "headings": [
//         "책 이름",
//         "저자",
//         "출판사",
//         "독서 여부",
//         "바로가기",
//     ],
//     "data": [
//         [
//             "클린 코드를 위한 테스트 주도 개발",
//             "해리 J.W 퍼시벌",
//             "인사이트",
//             "2018",
//             "http://github.com/portfolio-y0711/2020_tdd",
//         ],
//         [
//             "테스트 주도 개발로 배우는 객체 지향 설계와 실천",
//             "Manager",
//             "BJ 퍼블릭",
//             "2017",
//             "http://github.com/portfolio-y0711/2020_tdd",
//         ],
//         [
//             "테스트 주도 개발로 배우는 객체 지향 설계와 실천",
//             "Manager",
//             "BJ 퍼블릭",
//             "2017",
//             "http://github.com/portfolio-y0711/2020_tdd",
//         ],
//         [
//             "테스트 주도 개발로 배우는 객체 지향 설계와 실천",
//             "Manager",
//             "BJ 퍼블릭",
//             "2017",
//             "http://github.com/portfolio-y0711/2020_tdd",
//         ],
//         [
//             "테스트 주도 개발로 배우는 객체 지향 설계와 실천",
//             "Manager",
//             "BJ 퍼블릭",
//             "2017",
//             "",
//             "http://github.com/portfolio-y0711/2020_tdd",
//         ],
//         [
//             "테스트 주도 개발로 배우는 객체 지향 설계와 실천",
//             "Manager",
//             "BJ 퍼블릭",
//             "2017",
//             "http://github.com/portfolio-y0711/2020_tdd",
//         ],
//     ]
// }

module.exports = {
    dataSet,
    columns,
};
