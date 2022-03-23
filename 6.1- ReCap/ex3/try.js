const like = require('./like');
const Timer = require('./timer');

async function giveLikes() {
    // 在這裡建構new
    const timer = new Timer();

    // Ｑ：發生一點小問題，like 可以給負數，假設希望僅能輸入正數，並在輸入 <= 0 時產生錯誤
    // 並要在這邊加上例外處理
    try {
        const rets = await Promise.all([
            like(1),
            like(-2),
            like(3),
        ]);

        console.log(rets);
        console.log('time elapsed:', timer.count());
    } catch (ex) {
        console.log('ex=', ex.message);
    }
}
giveLikes();