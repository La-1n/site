import style from './Menu.module.css'

const Menu = () => {
    return (
        <nav className={style.menu}>
            <ul>
                <li><a href="/Projects/React/site/public#">Главная</a></li>
                <li><a href="/Projects/React/site/public#">О нас</a></li>
                <li><a href="/Projects/React/site/public#">Контакты</a></li>
            </ul>
        </nav>
    );
}

export default Menu