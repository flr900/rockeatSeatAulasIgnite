import { ThumbsUp, Trash } from 'phosphor-react'
import styles from'./Comment.module.css'

export function Comment(){
    return(

    <div className={styles.comment}>
            <img 
                className={styles.avatar}
                src='https://avatars.githubusercontent.com/u/43272162?v=4'>
            </img>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.commentAuthorAndTime}> 
                            <div className={styles.commentAuthor}>
                                <strong>Devon Lane</strong>
                                <span>(você)</span>
                            </div>
                            <time title='11 de la vai bolinha' dateTime='2022-05-11 08:13:38'>Cerca de 1 hora atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20}></Trash>
                        </button>
                    </header>
                    <p> Muito Bom Devon, Parabéns!! </p>
                </div>
                <footer className={styles.likeEngine}>
                        <button>
                            <ThumbsUp size={20}></ThumbsUp>
                            <p>Aplaudir</p>
                            <span>03</span>
                            </button>
                </footer>                 
            </div>      
    </div> 
   
    )
}