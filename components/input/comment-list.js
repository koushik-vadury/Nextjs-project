import classes from "./comment-list.module.css";
import ErrorAlert from "../ui/error-alert";

function CommentList(props) {
  const { items } = props;
  if (items.length === 0) {
    return <ErrorAlert>No comments found</ErrorAlert>;
  } else {
    return (
      <ul className={classes.comments}>
        {items.map((item) => {
          return (
            <li key={item._id}>
              <p>{item.text}</p>
              <div>
                By <address>{item.name}</address>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CommentList;
