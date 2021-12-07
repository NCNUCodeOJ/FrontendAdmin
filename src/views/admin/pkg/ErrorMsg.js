const ErrorMsg = (props) => {
  if (props.msg === "")
    return null;
  return (
    <div class="alert alert-danger" role="alert">
      {props.msg}
    </div>
  );
}

export default ErrorMsg;
