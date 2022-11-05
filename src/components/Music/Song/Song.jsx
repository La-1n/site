import style from './Song.module.css'

const Song = (props) => {
    return (
        <div className={style.song}>
            <img
                src={props.image}
                alt=''/>
            <i>{props.name}</i>
        </div>
    );
}

export default Song