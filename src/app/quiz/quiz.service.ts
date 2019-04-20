import * as I from '../models/quiz.d';
import * as DatabaseHandler from '../database/database.handler';
import * as QuizTextGenerator from '../services/quiz-text-generator';
import * as QuizAnswerSelectionsGenerator from '../services/quiz-answer-selections-generator';


export function selectedQuizPattern(): I.AnswerSelection {
  const quizPatterns: Array<I.AnswerSelection> = [
    'countryToCapital',
    'capitalToCountry',
    'countryToFlag',
    'flagToCountry',
    'isLandLocked'
  ];

  return DatabaseHandler.getRandom(quizPatterns);
}

export function getQuizTextAndAnswerSelections(selectedQuizPattern: I.AnswerSelection): any {
  let correctCountry: I.Country;
  let wrongCountries: Array<I.Country>;

  switch (selectedQuizPattern) {
    case 'countryToCapital':
      correctCountry = DatabaseHandler.getRandomCountry();
      wrongCountries = DatabaseHandler.getSimilarCountries(correctCountry);
      return {
        quizText: QuizTextGenerator.countryToCapital(correctCountry),
        quizImage: null,
        answerSelections: QuizAnswerSelectionsGenerator.getAnswerSelections(correctCountry, wrongCountries)
      };

    case 'capitalToCountry':
      correctCountry = DatabaseHandler.getRandomCountry();
      wrongCountries = DatabaseHandler.getSimilarCountries(correctCountry);
      return {
        quizText: QuizTextGenerator.capitalToCountry(correctCountry),
        quizImage: null,
        answerSelections: QuizAnswerSelectionsGenerator.getAnswerSelections(correctCountry, wrongCountries)
      };

    case 'countryToFlag':
      correctCountry = DatabaseHandler.getRandomCountry();
      wrongCountries = DatabaseHandler.getSimilarCountries(correctCountry);
      return {
        quizText: QuizTextGenerator.countryToFlag(correctCountry),
        quizImage: null,
        answerSelections: QuizAnswerSelectionsGenerator.getAnswerSelections(correctCountry, wrongCountries)
      };

    case 'flagToCountry':
      correctCountry = DatabaseHandler.getRandomCountry();
      wrongCountries = DatabaseHandler.getSimilarCountries(correctCountry);
      return {
        quizText: QuizTextGenerator.flagToCountry(),
        quizImage: this.getQuizImage(correctCountry),
        answerSelections: QuizAnswerSelectionsGenerator.getAnswerSelections(correctCountry, wrongCountries)
      };

    case 'isLandLocked':
      correctCountry = DatabaseHandler.getRandomLockedCountry();
      wrongCountries = DatabaseHandler.getSimilarUnlockedCountries(correctCountry);
      return {
        quizText: QuizTextGenerator.isLandLocked(),
        quizImage: null,
        answerSelections: QuizAnswerSelectionsGenerator.getAnswerSelections(correctCountry, wrongCountries)
      };

    // case 'IsLandLockedSub': {
    //   const _target: IQuizes.Capital = Object.assign({}, target);
    //   quizText = `次のうち、国境線の５％未満しか海岸線に接していない「準内陸国」はどれ？`;
    //   answerReference = _target.nameJp;
    // } break;
    //
    // case 'IsLandLockedDouble': {
    //   const _target: IQuizes.Capital = Object.assign({}, target);
    //   quizText = `次のうち、自身が内陸国で、さらに国境を接するすべての国も内陸国である「二重内陸国」はどれ？`;
    //   answerReference = _target.nameJp;
    // } break;
    //
    // case 'CountryToKanji': {
    //   const _target: IQuizes.Capital = Object.assign({}, target);
    //   quizText = `次のうち、「${_target.nameJpS}」を漢字で表したものはどれ？`;
    //   answerReference = _target.nameJp;
    // } break;
    //
    // case 'CountryToKanjiAbbr': {
    //   const _target: IQuizes.Capital = Object.assign({}, target);
    //   quizText = `次のうち、「${_target.nameJp}」を漢字一文字で表したものはどれ？`;
    //   answerReference = _target.nameJp;
    // } break;
    //
    // case 'KanjiToCountry': {
    //   const _target: IQuizes.Capital = Object.assign({}, target);
    //   quizText = `次のうち、漢字で「${_target.nameJpB}」と表す国はどれ？`;
    //   answerReference = _target.nameJpB;
    // } break;
    //
    // case 'KanjiAbbrToCountry': {
    //   const _target: IQuizes.Capital = Object.assign({}, target);
    //   quizText = `次のうち、漢字一文字で「${_target.nameJpBAbbr}」と表す国はどれ？`;
    //   answerReference = _target.nameJpBAbbr;
    // } break;
    //
    // case 'CountryNameSuffix': {
    //   const _target: IQuizes.Capital = Object.assign({}, target);
    //   quizText = `「${_target.nameJpS}」の正式名称はどれ？`;
    //   answerReference = _target.nameJpS;
    // } break;
    //
    // case 'CodeToName': {
    //   const _target: IQuizes.Capital = Object.assign({}, target);
    //   quizText = `ISO 3166-1 の国名コードで ${_target.countryCode} と表す国は？`;
    //   answerReference = _target.countryCode;
    // } break;
    //
    // case 'NameToCode': {
    //   const _target: IQuizes.Capital = Object.assign({}, target);
    //   quizText = `${_target.nameJpS}の ISO 3166-1 の国名コードは？`;
    //   answerReference = _target.nameJpS;
    // } break;
  }
}

export function getQuizImage(country: I.Country): string {
  return `~/app/images/flags/${country.countryCode}@3x.png`;
}

export function getAnswerText(answer: I.AnswerOfCountry, selectedQuizPattern: I.AnswerSelection): any {
  switch(selectedQuizPattern) {
    case 'countryToCapital': return answer.capitalJp;
    case 'capitalToCountry': return answer.nameJpS;
    case 'countryToFlag': return this.getQuizImage(answer);;
    case 'flagToCountry': return answer.nameJpS;
    case 'isLandLocked': return answer.nameJpS;
    default: return '';
  }
}
