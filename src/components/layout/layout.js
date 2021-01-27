import style from './layout.module.css';
import bg1 from '../../assets/bg1.jpg'

const Layout = ({ id, title, descr, urlBg, colorBg}) => {
    const styleBg = urlBg ? { backgroundImage: `url(${bg1})` } :
        colorBg ?
            { backgroundColor: `#74e1ff` } : {};

    return (
        <section className={style.root} id={id} style={styleBg}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        {
                            title &&
                            (<h3>
                                {title}
                            </h3>)
                        }
                        <span className={style.separator}></span>
                    </div>
                    <div className={`${style.desc} ${style.full}`}>
                        {
                            descr &&
                            (<p>
                                {descr}
                            </p>)
                        }
                    </div>
                </article>
            </div>
        </section>
    )
}

export  default Layout;