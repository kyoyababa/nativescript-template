import * as QuizAnswerGenerator from './quiz-answer-generator';
// import * as DatabaseHandler from '../database/database.handler';

// const quizAnswerGenerator = new QuizAnswerGenerator(new DatabaseHandler());

// describe('countryToCapital', () => {
//   describe('日本の国データを渡したとき', () => {
//     const data = {"nameJp":"日本国","nameJpS":"日本","countryCode":"JP","regionCode":"Asia","capitalJp":"東京","secondCapitalJp":"大阪","isIsland":"true","lat":"35.689568","lon":"139.691717","landLocked":"","nameJpB":"","nameJpBAbbr":""};
//     const actual = QuizAnswerGenerator.countryToCapital(data);
//
//     it('1つ目に日本が返され、isCorrectがtrueになっていること', () => {
//       expect(actual[0].nameJpS).toBe('日本');
//       expect(actual[0].isCorrect).toBeTruthy();
//     });
//
//     it('2つ目から4つ目にアジアの国データが返され、isCorrectがfalseになっていること', () => {
//       for (let i = 1; i < 4; i++) {
//         expect(actual[i].regionCode).toBe('Asia');
//         expect(actual[i].isCorrect).toBeFalsy();
//       }
//     });
//   });
// });
