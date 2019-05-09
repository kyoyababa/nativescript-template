import * as _ from '../util/lodash.util';
import * as I from '../models/quiz.d';
import * as DatabaseHandler from '../database/database.handler';
import * as QuizTextGenerator from '../services/quiz-text-generator';
import * as QuizAnswerSelectionsGenerator from '../services/quiz-answer-selections-generator';


export function selectQuizPattern(): I.AnswerSelection {
  const quizPatterns: Array<I.AnswerSelection> = [
    'COUNTRY_TO_CAPITAL',
    'COUNTRY_TO_SECOND_CAPITAL',
    'CAPITAL_TO_COUNTRY',
    'SECOND_CAPITAL_TO_COUNTRY',
    'COUNTRY_TO_FLAG',
    'FLAG_TO_COUNTRY',
    'IS_LAND_LOCKED',
    'IS_LAND_LOCKED_SUB',
    'IS_LAND_LOCKED_DOUBLE',
    'COUNTRY_TO_KANJI_ABBR',
    'KANJI_ABBR_TO_COUNTRY',
    'COUNTRY_NAME_SUFFIX',
    'COUNTRY_TO_REGIONAL_BLOCK',
    'REGIONAL_BLOCK_TO_COUNTRY'
  ];

  return <I.AnswerSelection>_.sample(quizPatterns);
}

function getCorrectAnswer(selectedQuizPattern: I.AnswerSelection): I.Country {
  switch (selectedQuizPattern) {
    case 'COUNTRY_TO_CAPITAL':
    case 'CAPITAL_TO_COUNTRY':
    case 'COUNTRY_TO_FLAG':
    case 'FLAG_TO_COUNTRY':
      return DatabaseHandler.getRandomCountry();

    case 'COUNTRY_TO_SECOND_CAPITAL':
    case 'SECOND_CAPITAL_TO_COUNTRY':
      return DatabaseHandler.getRandomSecondCapitalCountry();

    case 'IS_LAND_LOCKED':
      return DatabaseHandler.getRandomLockedCountry();

    case 'IS_LAND_LOCKED_SUB':
      return DatabaseHandler.getRandomLockedSubCountry();

    case 'IS_LAND_LOCKED_DOUBLE':
      return DatabaseHandler.getRandomLockedDoubleCountry();

    case 'COUNTRY_TO_KANJI_ABBR':
    case 'KANJI_ABBR_TO_COUNTRY':
      return DatabaseHandler.getRandomKanjiAbbribiatableCountry();

    case 'COUNTRY_NAME_SUFFIX':
      return DatabaseHandler.getRandomSuffixableCountry();

    case 'COUNTRY_TO_REGIONAL_BLOCK':
    case 'REGIONAL_BLOCK_TO_COUNTRY':
      return DatabaseHandler.getRandomRegionalBlocksCountry();
  }
}

function getWrongAnswerSelections(selectedQuizPattern: I.AnswerSelection, correctAnswer: I.Country): Array<I.Country> {
  switch (selectedQuizPattern) {
    case 'COUNTRY_TO_FLAG':
    case 'FLAG_TO_COUNTRY':
      return DatabaseHandler.getSimilarCountries(correctAnswer);

    case 'COUNTRY_TO_CAPITAL':
    case 'CAPITAL_TO_COUNTRY':
      return DatabaseHandler.getSimilarCapitalCountries(correctAnswer);

    case 'COUNTRY_TO_SECOND_CAPITAL':
    case 'SECOND_CAPITAL_TO_COUNTRY':
      return DatabaseHandler.getSimilarSecondCapitalCountries(correctAnswer);

    case 'IS_LAND_LOCKED':
      return DatabaseHandler.getSimilarUnlockedCountries(correctAnswer);

    case 'IS_LAND_LOCKED_SUB':
      return DatabaseHandler.getSimilarUnlockedsubCountries(correctAnswer);

    case 'IS_LAND_LOCKED_DOUBLE':
      return DatabaseHandler.getSimilarUnlockeddoubleCountries(correctAnswer);

    case 'COUNTRY_TO_KANJI_ABBR':
    case 'KANJI_ABBR_TO_COUNTRY':
      return DatabaseHandler.getSimilarKanjiAbbrCountries(correctAnswer);

    case 'COUNTRY_NAME_SUFFIX':
      return DatabaseHandler.getDummySuffixCountries(correctAnswer);

    case 'COUNTRY_TO_REGIONAL_BLOCK':
      return DatabaseHandler.getSimilarRegionalBlocks(correctAnswer);

    case 'REGIONAL_BLOCK_TO_COUNTRY':
      return DatabaseHandler.getSimilarRegionalBlocksCountries(correctAnswer);
  }
}

function getQuizImageSrc(country: I.Country): string {
  return `~/app/images/flags/${country.countryCode}@3x.png`;
}

export function shouldShow(target: I.DisplayMode, currentDisplayMode: I.DisplayMode): boolean {
  return target === currentDisplayMode;
}

export function getAnswerImageSrc(isCorrect: boolean): string {
  const iconType = isCorrect ? 'correct' : 'incorrect';
  return `~/app/images/answer/icon-${iconType}.png`;
}

export function getAnswerText(answer: I.AnswerOfCountry, selectedQuizPattern: I.AnswerSelection): string {
  switch(selectedQuizPattern) {
    case 'COUNTRY_TO_CAPITAL':
      return answer.capitalJp;

    case 'CAPITAL_TO_COUNTRY':
    case 'SECOND_CAPITAL_TO_COUNTRY':
    case 'FLAG_TO_COUNTRY':
    case 'IS_LAND_LOCKED':
    case 'IS_LAND_LOCKED_SUB':
    case 'IS_LAND_LOCKED_DOUBLE':
    case 'KANJI_ABBR_TO_COUNTRY':
    case 'REGIONAL_BLOCK_TO_COUNTRY':
      return answer.nameJpS;

    case 'COUNTRY_TO_SECOND_CAPITAL':
      return answer.secondCapitalJp;

    case 'COUNTRY_TO_FLAG':
      return getQuizImageSrc(answer);

    case 'COUNTRY_TO_KANJI_ABBR':
      return answer.nameJpBAbbr;

    case 'COUNTRY_NAME_SUFFIX':
      return answer.nameJp;

    case 'COUNTRY_TO_REGIONAL_BLOCK':
      return answer.regionalBlocks[0];
  }
}

export function getQuizTextAndAnswerSelections(selectedQuizPattern: I.AnswerSelection): I.QuizModel {
  const correctAnswer = getCorrectAnswer(selectedQuizPattern);
  const wrongAnswers = getWrongAnswerSelections(selectedQuizPattern, correctAnswer);
  const answerSelectionPattern = selectedQuizPattern === 'COUNTRY_TO_FLAG' ? 'IMAGE' : 'TEXT';
  const quizImage = selectedQuizPattern === 'FLAG_TO_COUNTRY' ? getQuizImageSrc(correctAnswer) : '';

  return {
    answerSelectionPattern: answerSelectionPattern,
    quizText: QuizTextGenerator.getQuizText(selectedQuizPattern, correctAnswer),
    quizImage: quizImage,
    answerSelections: QuizAnswerSelectionsGenerator.getAnswerSelections(correctAnswer, wrongAnswers)
  }
}
