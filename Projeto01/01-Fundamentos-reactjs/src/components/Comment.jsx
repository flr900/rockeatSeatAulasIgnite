import styles from'./Comment.module.css'

export function Comment(){
    return(
    <div className={styles.comment}>
        <img 
            className={styles.avatar}
            src='https://avatars.githubusercontent.com/u/43272162?v=4'>
        </img>
    </div>
    )
}