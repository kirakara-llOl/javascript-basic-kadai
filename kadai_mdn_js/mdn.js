// Date オブジェクト
const date = new Date();

// 年月日の取得
const [year, month, day] = [
  date.getFullYear() + '年',
  date.getMonth() + 1 + '月',
  date.getDate() + '日',
];

// 年月日コンソール出力
console.log(year + month + day);