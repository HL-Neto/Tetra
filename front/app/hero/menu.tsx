import style from "./menu.module.css"



export default function Menu() {

    return (

        <div className={style.menu}>

            <h1>Working in progress</h1>


            < a 

                href="/admin"
                target="_blank"
                rel="noopener noreferrer"
            
            >

                <span className={style.admin}>Admin</span>
            
            </a>

        </div>

    );
}