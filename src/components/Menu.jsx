import style from './Menu.module.css'

const Menu = () => {
    return (
        <nav className={style.menu}>
            <ul>
                <li><a href="/#">Главная</a></li>
                <li><a href="/#">О нас</a></li>
                <li><a href="/#">Контакты</a></li>
            </ul>
        </nav>
    );
}

export default Menu