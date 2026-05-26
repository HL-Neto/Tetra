"use client"

import Menu from "@/app/hero/menu"
import style from "./vendedor.module.css"

export default function Vendedor(){

    const vendedores = [
        {
            nome: "Carlos Silva",
            idade: 28,
            vendas: 32,
            meta: "92%",
            especialidade: "Motos esportivas"
        },

        {
            nome: "Fernanda Costa",
            idade: 31,
            vendas: 28,
            meta: "85%",
            especialidade: "Motos urban"
        },

        {
            nome: "Marcos Lima",
            idade: 25,
            vendas: 41,
            meta: "110%",
            especialidade: "Off Road"
        },

        {
            nome: "Juliana Rocha",
            idade: 29,
            vendas: 35,
            meta: "97%",
            especialidade: "Cross"
        }
    ];

    return(

        <div>

            <Menu/>

            <div className={style.container}>

                {vendedores.map((vendedor, index) => (

                    <div key={index} className={style.card}>

                        <div className={style.left}>
                            <h1>{vendedor.nome}</h1>
                        </div>

                        <div className={style.right}>

                            <p>
                                <strong>Idade:</strong> {vendedor.idade}
                            </p>

                            <p>
                                <strong>Vendas:</strong> {vendedor.vendas}
                            </p>

                            <p>
                                <strong>Meta:</strong> {vendedor.meta}
                            </p>

                            <p>
                                <strong>Especialidade:</strong> {vendedor.especialidade}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}