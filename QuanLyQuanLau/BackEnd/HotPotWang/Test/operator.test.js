// const {Dangnhap} = require('./Dangnhap');
const {Dangky} = require('./Dangky');

// test('Taikhoansai',()=>{
//     expect(Dangnhap('a','b')).toBe('Tài khoản đăng nhập sai')
// })

test('Khongnhapemail',()=>{
    expect(Dangky('','a',)).toBe('Email hoặc Username hoặc Password không được Null')
})