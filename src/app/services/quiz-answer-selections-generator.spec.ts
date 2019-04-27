import { countries } from '../database/countries';
import * as QuizAnswerSelectionsGenerator from './quiz-answer-selections-generator';

const jp = countries.find(c => c.countryCode === 'JP');
const az = countries.find(c => c.countryCode === 'AZ');
const af = countries.find(c => c.countryCode === 'AF');
const ab = countries.find(c => c.countryCode === 'AB');


describe('getAnswerSelections', () => {
  describe('日本が正解のとき', () => {
    const correctData = jp;
    const wrongData = [az, af, ab];
    const actual = QuizAnswerSelectionsGenerator.getAnswerSelections(correctData, wrongData);

    it('1つ目に日本が返され、isCorrectがtrueになっていること', () => {
      expect(actual[0].nameJpS).toBe('日本');
      expect(actual[0].isCorrect).toBeTruthy();
    });

    it('2つ目から4つ目にアジアの国データが返され、isCorrectがfalseになっていること', () => {
      for (let i = 1; i < 4; i++) {
        expect(actual[i].regionCode).toBe('Asia');
        expect(actual[i].isCorrect).toBeFalsy();
      }
    });
  });
});
