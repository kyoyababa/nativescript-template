import * as appSettings from "tns-core-modules/application-settings";
import * as I from '../models/quiz.d';

interface AnswerHistoryItem {
  quizPattern: I.AnswerSelection;
  correctAnswerCountry: string;
  isCorrected: boolean;
  createdAt: Date;
}

interface AnswerHistoryItemRaw {
  quizPattern: I.AnswerSelection;
  correctAnswerCountry: string;
  isCorrected: 'true' | 'false';
  createdAt: string;
}

const answerHistoryStorageName = 'ANSWER_HISTORY';

/*
 * ANSWER_HISTORY DB設計
 * |"quizPattern"                |"correctAnswerCountry"  |"isCorrected"  |"createdAt"                     |
 * |"COUNTRY_TO_CAPITAL"         |"JP"                    |"true"         |"EEE MMM DD yyyy hh:mm:ss ..."  |
 * |"CAPITAL_TO_COUNTRY"         |"US"                    |"false"        |"EEE MMM DD yyyy hh:mm:ss ..."  |
 * |"COUNTRY_TO_SECOND_CAPITAL"  |"CN"                    |"true"         |"EEE MMM DD yyyy hh:mm:ss ..."  |
 */

function getAnswerHistory(): Array<AnswerHistoryItem> {
  const answerHistoryItems = JSON.parse(appSettings.getString(answerHistoryStorageName, '[]'));
  return answerHistoryItems.map((i: AnswerHistoryItemRaw) => {
    return {
      quizPattern: i.quizPattern,
      correctAnswerCountry: i.correctAnswerCountry,
      isCorrected: i.isCorrected === 'true',
      createdAt: new Date(i.createdAt)
    }
  });
}

function pushAnswer(quizPattern: I.AnswerSelection, correctAnswerCountry: string, isCorrected: boolean): void {
  const newAnswerHistoryItems: Array<AnswerHistoryItem> = getAnswerHistory().concat({
    quizPattern,
    correctAnswerCountry,
    isCorrected,
    createdAt: new Date()
  });
  const newAnswerHistoryItemsRaw: Array<AnswerHistoryItemRaw> = newAnswerHistoryItems.map(i => {
    return {
      quizPattern,
      correctAnswerCountry,
      isCorrected: <'true' | 'false'>isCorrected.toString(),
      createdAt: new Date().toString()
    }
  })
  appSettings.setString(answerHistoryStorageName, JSON.stringify(newAnswerHistoryItemsRaw));
}
