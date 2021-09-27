describe('datatables', () => {
    const rawdata = require('./datatables.rawdata')
    it('', () => {
       const actual = [rawdata[2]].reduce((acc, curr, idx) => {
            const arr = [];
            const { title, author, publisher } = curr;
            arr.push(idx);
            arr.push(title.replace(/\(.+?\)/, " "));
            arr.push(author.includes('|') ? author.split('|')[0]: author);
            arr.push(publisher);
            arr.push('');
            arr.push('');
            acc.push(arr);
            return acc;
       }, [])
       expect(actual).toEqual([ [ 0, '<b>스파크 완벽 가이드</b>  ', '빌 체임버스', '한빛미디어', '', '' ] ])
    })
})