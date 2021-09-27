module.exports = () => {
    $('#example').editable({
        container: 'body',
        selector: 'td.bookname',
        title: '책 이름',
        validate: function(value) {
            if($.trim(value) == '') {
                return '값을 입력하세요'
            }
        }
    });
    $('#example').editable({
        container: 'body',
        selector: 'td.writer',
        title: '저자',
        validate: function(value) {
            if($.trim(value) == '') {
                return '값을 입력하세요'
            }
        }
    });
    $('#example').editable({
        container: 'body',
        selector: 'td.year',
        title: '공부한 해',
        datatype: 'json',
        source: [
            {
                value: "2015",
                text: "2015",
            },
            {
                value: "2016",
                text: "2016",
            },
            {
                value: "2017",
                text: "2017",
            },
            {
                value: "2018",
                text: "2018",
            },
            {
                value: "2019",
                text: "2019",
            },
            {
                value: "2020",
                text: "2020",
            },
            {
                value: "2021",
                text: "2021",
            }
        ],
        validate: function(value) {
            if($.trim(value) == '') {
                return '값을 입력하세요'
            }
        }
    });
}