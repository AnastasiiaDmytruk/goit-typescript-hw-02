import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div>
      <p>`Upps...There is an error.${message} Please try again later...`</p>
    </div>
  );
};

export default ErrorMessage;
