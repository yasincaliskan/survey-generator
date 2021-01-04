import React from 'react';
import { QuestionGroup, Question, QuestionGroupList } from '../question/Question';


export enum SurveyStatus {
  NEW = "New",
  VIEWED = "Viewed",
  SOLVED = "Solved"
}

export interface SurveyTimelineCardData {
  id: number;
  owner: string;
  title: string;
  description: string;
  questionCount: number;
  image?: string;
  status?: SurveyStatus;
}

export interface SurveyProps {
  surveyList: SurveyTimelineCardData[];
}

export function SurveyGenerator() {

  const questions: Question[] = [];

  const finishSurvey = () => {
    console.log(JSON.stringify(questions));
  };

  return (<div>
    <QuestionGroup questionList={questions}></QuestionGroup>
    <button onClick={finishSurvey}>Finish Survey</button>
  </div>
  );
}

// If need to read this data dynamically use fs library instead of require.
const mockQuestions = require("../../mockQuestionData.json");

export function SurveyList() {
  const questions: Question[] = mockQuestions;

  return (
    <div>
      <QuestionGroupList questionList={questions} />
    </div>
  )
}

export function SurveyTimeline(props: SurveyProps) {
    return (
      <div className="survey-timeline">
        {props.surveyList.map((survey) => {
          return SurveyTimelineCard(survey);
        })}
      </div>
    )
}

function SurveyTimelineCard(survey: SurveyTimelineCardData) {
  return (
    <div className="survey-timeline-card">
      <img src={survey.image} alt={survey.title} />
      <hr/>
      <h3><a href="#">{survey.title}</a></h3>
      <p>{survey.description}</p>
      <div>
        <span>{`Author ${survey.owner}`}</span>
        <br/>
        <span>{`The ${survey.title} has ${survey.questionCount} questions.`}</span>
        <br/>
        <span>{survey.status}</span>
        <br/>
      </div>
    </div>
  )
}