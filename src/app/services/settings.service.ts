import * as appSettings from "tns-core-modules/application-settings";

import * as I from '../models/quiz.d';

function getAnswerHistory(): Array<any> {
  return JSON.parse(appSettings.getString('ANSWER_HISTORY', '[]'));
}
