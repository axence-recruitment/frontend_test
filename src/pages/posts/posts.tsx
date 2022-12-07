import PostsForm from './components/posts-form';
import PostsList from './components/posts-list';
import styles from './posts.module.css';

function Posts() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Post Your Idea</h1>
      <PostsForm/>
      <PostsList/>
    </div>
  )
}

export default Posts
