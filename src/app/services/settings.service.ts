import * as appSettings from "tns-core-modules/application-settings";
import * as I from '../models/quiz.d';

export interface AnswerHistoryItem {
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

export function getAnswerHistory(): Array<AnswerHistoryItem> {
  const answerHistoryItems = JSON.parse(appSettings.getString(answerHistoryStorageName, '[]'));
  return convertAnswerHistoryItemsRawToItems(answerHistoryItems);
}

export function pushAnswer(quizPattern: I.AnswerSelection, correctAnswerCountry: string, isCorrected: boolean): void {
  const newAnswerHistoryItems = getAnswerHistory().concat({
    quizPattern,
    correctAnswerCountry,
    isCorrected,
    createdAt: new Date()
  });
  const newAnswerHistoryItemsRaw = convertAnswerHistoryItemsToRaw(newAnswerHistoryItems);
  appSettings.setString(answerHistoryStorageName, JSON.stringify(newAnswerHistoryItemsRaw));
}

function convertAnswerHistoryItemsRawToItems(answerHistoryItemsRaw: Array<AnswerHistoryItemRaw>): Array<AnswerHistoryItem> {
  return answerHistoryItemsRaw.map(i => {
    return {
      quizPattern: i.quizPattern,
      correctAnswerCountry: i.correctAnswerCountry,
      isCorrected: i.isCorrected === 'true',
      createdAt: new Date(i.createdAt)
    }
  });
}

function convertAnswerHistoryItemsToRaw(answerHistoryItems: Array<AnswerHistoryItem>): Array<AnswerHistoryItemRaw> {
  return answerHistoryItems.map(i => {
    return {
      quizPattern: i.quizPattern,
      correctAnswerCountry: i.correctAnswerCountry,
      isCorrected: <'true' | 'false'>i.isCorrected.toString(),
      createdAt: i.createdAt.toString()
    }
  });
}
