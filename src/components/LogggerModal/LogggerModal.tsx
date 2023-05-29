import React from "react";
import { useTypedSelector } from "../../utilities/reduxHooks";
import { title, wrapper } from "./LogggerModal.css";
import LogItem from "./LogItem/LogItem";

const LogggerModal: React.FC = () => {
  const logs = useTypedSelector(state => state.logger.logArray);
  return (
    <div className={wrapper}>
      <div className={title}>User actions</div>
      {logs.map((log, index) => (
        <LogItem key={index} logItem={log} />
      ))}
    </div>
  );
};

export default LogggerModal;
