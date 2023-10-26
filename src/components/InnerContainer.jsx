import style from "./innercontainer.module.css";

const InnerContainer = ({ children }) => {
  return <div className={style.innercontainer}>{children}</div>;
};

export default InnerContainer;
