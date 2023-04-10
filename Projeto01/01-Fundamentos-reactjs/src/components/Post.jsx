import styles from './Post.module.css'

export function Post(props){
    return(
        <article className={styles.post}>
            <header className={styles.postHeader}>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src='https://avatars.githubusercontent.com/u/43272162?v=4'
                    />
                    <div className={styles.authorInfo}>
                        <strong>Marley Coelho</strong>
                        <span>Comedor de pão</span>
                    </div>
                </div>
                <time title='11 de la vai bolinha' dateTime='2022-05-11 08:13:38'>Publicado ha 1m</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href=''>jane.design/doctorcare</a></p>

                <p> 
                    <a href=''> #novoprojeto</a> {' '} 
                    <a href=''>#nlw </a> {' '} 
                    <a href=''>#rocketseat</a> </p> {' '} 
            </div>

            <footer>
                <strong>Deixe seu Feedback</strong>
                <textarea className='publishText'> Nossa, adorei amigo!</textarea>
                <a> Publicar </a>
            </footer>

        </article>
    )
}