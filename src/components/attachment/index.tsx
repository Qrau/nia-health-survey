import React, { useState } from "react";
import { colors } from "..";
import { Report } from "../../model";
import "./styles.css";
// import axios from "axios";

interface Props {
  report: Report,
  setReport: Function,
  question_id: string,
  checkMark: React.ReactNode,
}

export const Attachment = ({ report, setReport, question_id, checkMark }: Props) => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e: any) => {
    setFile(e.target.files);
    setFileName(e.target.files[0].name);
    setReport((prevStates: any) => ({
      ...prevStates,
      attachments: { ...prevStates.attachments, [question_id]: e.target.files }
    }));
  };

  const uploadFile = async (e: any) => {
    console.log(file);
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("fileName", fileName);
    // try {
    //   const res = await axios.post("http://localhost:3000/upload", formData);
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div style={styles.main}>
      {report.attachments[question_id]?.length && checkMark}
      <input id={question_id} type="file" onChange={saveFile} multiple />
      <button style={styles.button} onClick={uploadFile}>
        Upload
      </button>
    </div>
  );
};

const styles: any = {
  main: {
    marginTop: "1em"
  },
  button: {
    color: colors.blue,
    border: "none",
    backgroundColor: "transparent",
    resize: "none",
    outline: "none"
  }
};
