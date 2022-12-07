import avatar from './../../../assets/avatar.png'
import styles from './posts-form.module.css';

function PostsForm() {
  return (
    <div className={styles.wrapper}>
      <img src={avatar} alt="Avatar"/>
      <h2>Hello!</h2>
      <h3>Post your message here:</h3>
      <form className={styles.form}>
        <input type="text" name="title" placeholder="Add a title" />
        <textarea name="content"/>
        <button type="submit">Add post</button>
      </form>
    </div>
  )
}

export default PostsForm
