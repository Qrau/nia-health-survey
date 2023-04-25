import React, { useEffect, useState } from "react";
import { UserCard } from "../../components/user-card";
import { colors } from "../../components";
import { useApiResp } from './../../hooks/use-api-resp';

const resp = [
  {
    id: 1660828769365,
    loading: false,
    date: "8/18/2022, 3:19:29 PM",
    answers: {
      "1": {
        score: "7",
        question_id: "1",
        question_title: "How was your sleep last night ?"
      },
      "2": {
        score: "2",
        question_id: "2",
        question_title: "How good is your skin condition ?"
      }
    },
    attachments: {},
    username: "testuser123",
    survey_title: "Sleep and Skin conditions Survey"
  },
  {
    id: 1660828775925,
    loading: false,
    date: "8/18/2022, 3:19:35 PM",
    answers: {
      "1": {
        score: "7",
        question_id: "1",
        question_title: "How was your sleep last night ?"
      },
      "2": {
        score: "9",
        question_id: "2",
        question_title: "How good is your skin condition ?"
      }
    },
    attachments: {},
    username: "testuser",
    status: "success",
    survey_title: "Sleep and Skin conditions Survey"
  },
  {
    id: 1660828783493,
    loading: false,
    date: "8/18/2022, 3:19:43 PM",
    answers: {
      "1": {
        score: "3",
        question_id: "1",
        question_title: "How was your sleep last night ?"
      },
      "2": {
        score: "5",
        question_id: "2",
        question_title: "How good is your skin condition ?"
      }
    },
    attachments: {},
    username: "testuser",
    status: "success",
    survey_title: "Sleep and Skin conditions Survey"
  },
  {
    id: 1660828792620,
    loading: false,
    date: "8/18/2022, 3:19:52 PM",
    answers: {
      "1": {
        score: "10",
        question_id: "1",
        question_title: "How was your sleep last night ?"
      },
      "2": {
        score: "3",
        question_id: "2",
        question_title: "How good is your skin condition ?"
      }
    },
    attachments: {},
    username: "testuser",
    status: "success",
    survey_title: "Sleep and Skin conditions Survey"
  },
  {
    id: 1660828800861,
    loading: false,
    date: "8/18/2022, 3:20:00 PM",
    answers: {
      "1": {
        score: "1",
        question_id: "1",
        question_title: "How was your sleep last night ?"
      },
      "2": {
        score: "8",
        question_id: "2",
        question_title: "How good is your skin condition ?"
      }
    },
    attachments: {},
    username: "testuser",
    status: "success",
    survey_title: "Sleep and Skin conditions Survey"
  }
];

export const Account = () => {
  const [itemIndex, setItemIndex] = useState<number | null>(null);
  const { resp } = useApiResp();
  const handleClick = (clicked: any) => {
    setItemIndex(clicked);
  };
  return (
    <div>
      <UserCard username={resp[0].username} totalSurveys={resp.length} />
      <div style={styles.surveyWrapper}>
        {resp.map(({ id, date, answers, survey_title }, i) => (
          <div
            onClick={() => handleClick(i)}
            style={styles.surveyCardWrapper}
            key={id}
          >
            <div style={styles.surveyCard}>
              <p style={styles.surveyCard.p}> {i + 1} </p>
              <time style={styles.surveyCard.time}> {date} </time>
              <h4 style={styles.surveyCard.h4}> {survey_title} </h4>
              {i === itemIndex &&
                Object.values(answers).map(({ question_title, score }, i) => (
                  <section style={styles.answerWrapper} key={i}>
                    <p> {question_title} </p>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((o: number) => (
                      <label key={o} style={styles.answerLabel}>
                        <input
                          value={o}
                          defaultChecked={o === Number(score)}
                          type="radio"
                          disabled={true}
                        />
                        <p> {o} </p>
                      </label>
                    ))}
                  </section>
                ))}
              {i === itemIndex && (
                <i
                  onClick={(e) => {
                    e.stopPropagation();
                    setItemIndex(null);
                  }}
                  style={styles.surveyCard.i}
                >
                  ▲
                </i>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  main: {},
  answerLabel: {
    display: "inline-block"
  },
  answerWrapper: {
    padding: "1em 0",
    border: "1px solid #ccc",
    borderRadius: "14px",
    margin: "1em 0"
  },
  surveyWrapper: {
    display: "flex",
    flexWrap: "wrap"
  },
  surveyCardWrapper: {
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "23em"
  },
  surveyCard: {
    border: "1px solid #ccc",
    margin: ".5em",
    borderRadius: "14px",
    padding: "2em",
    position: "relative",
    overflow: "hidden",
    color: `${colors.blue}`,
    p: {
      margin: "auto",
      position: "absolute",
      background: `${colors.blue}`,
      color: `${colors.white}`,
      padding: ".5em",
      left: 0,
      top: 0
    },
    time: {
      margin: "0"
    },
    h4: {
      margin: "0"
    },
    i: {
      position: "relative",
      bottom: "-2em"
    }
  }
};
