"use client"

import { useState } from "react";
import Menu from "@/app/hero/menu"
import style from "./estoque.module.css"

export default function Estoque(){

    const [motoSelecionada, setMotoSelecionada] = useState<any>(null);

    const motos = {
        esporte: [
            {
                nome: "CBR 1000RR",
                marca: "Honda",
                ano: 2024,
                cilindradas: "1000cc",
                preco: "R$ 120.000",
                estoque: 3
            },
            {
                nome: "BMW S1000RR",
                marca: "BMW",
                ano: 2025,
                cilindradas: "1000cc",
                preco: "R$ 145.000",
                estoque: 2
            },
            {
                nome: "Ninja ZX-10R",
                marca: "Kawasaki",
                ano: 2024,
                cilindradas: "1000cc",
                preco: "R$ 110.000",
                estoque: 4
            }
        ],

        offroad: [
            {
                nome: "Lander 250",
                marca: "Yamaha",
                ano: 2023,
                cilindradas: "250cc",
                preco: "R$ 28.000",
                estoque: 6
            },
            {
                nome: "Ténéré 700",
                marca: "Yamaha",
                ano: 2025,
                cilindradas: "700cc",
                preco: "R$ 72.000",
                estoque: 2
            },
            {
                nome: "CRF 250F",
                marca: "Honda",
                ano: 2024,
                cilindradas: "250cc",
                preco: "R$ 31.000",
                estoque: 5
            }
        ],

        cross: [
            {
                nome: "KTM SX 450",
                marca: "KTM",
                ano: 2025,
                cilindradas: "450cc",
                preco: "R$ 68.000",
                estoque: 1
            },
            {
                nome: "YZ 250F",
                marca: "Yamaha",
                ano: 2024,
                cilindradas: "250cc",
                preco: "R$ 52.000",
                estoque: 3
            },
            {
                nome: "CRF 450R",
                marca: "Honda",
                ano: 2025,
                cilindradas: "450cc",
                preco: "R$ 60.000",
                estoque: 2
            }
        ],

        urban: [
            {
                nome: "CG 160",
                marca: "Honda",
                ano: 2024,
                cilindradas: "160cc",
                preco: "R$ 18.000",
                estoque: 10
            },
            {
                nome: "Factor 150",
                marca: "Yamaha",
                ano: 2023,
                cilindradas: "150cc",
                preco: "R$ 17.000",
                estoque: 8
            },
            {
                nome: "Fazer 250",
                marca: "Yamaha",
                ano: 2025,
                cilindradas: "250cc",
                preco: "R$ 26.000",
                estoque: 4
            }
        ]
    };

    return(
        
        <div>

            <Menu/>

            <div className={style.container}>
                
                <div className={style.category}> 
                    
                    <section>
                        <h1>ESPORTE</h1>
                    </section>
                    
                    <section className={style.cards}>

                        {motos.esporte.map((moto, index) => (
                            <div
                                key={index}
                                className={style.box}
                                onClick={() => setMotoSelecionada(moto)}
                            >
                                <h2>{moto.nome}</h2>
                            </div>
                        ))}

                    </section>
                
                </div>

                <div className={style.category}> 
                    
                    <section>
                        <h1>OFF ROAD</h1>
                    </section>
                    
                    <section className={style.cards}>

                        {motos.offroad.map((moto, index) => (
                            <div
                                key={index}
                                className={style.box}
                                onClick={() => setMotoSelecionada(moto)}
                            >
                                <h2>{moto.nome}</h2>
                            </div>
                        ))}

                    </section>
                
                </div>

                <div className={style.category}>
                    
                    <section>
                        <h1>CROSS</h1>
                    </section>
                    
                    <section className={style.cards}>

                        {motos.cross.map((moto, index) => (
                            <div
                                key={index}
                                className={style.box}
                                onClick={() => setMotoSelecionada(moto)}
                            >
                                <h2>{moto.nome}</h2>
                            </div>
                        ))}

                    </section>    
                
                </div>

                <div className={style.category}>

                    <section>
                        <h1>URBAN</h1>
                    </section>
                    
                    <section className={style.cards}>

                        {motos.urban.map((moto, index) => (
                            <div
                                key={index}
                                className={style.box}
                                onClick={() => setMotoSelecionada(moto)}
                            >
                                <h2>{moto.nome}</h2>
                            </div>
                        ))}

                    </section>
                
                </div>

            </div>

            {motoSelecionada && (
                <div className={style.modal}>
                    
                    <div className={style.modalContent}>

                        <h1>{motoSelecionada.nome}</h1>

                        <p><strong>Marca:</strong> {motoSelecionada.marca}</p>
                        <p><strong>Ano:</strong> {motoSelecionada.ano}</p>
                        <p><strong>Cilindradas:</strong> {motoSelecionada.cilindradas}</p>
                        <p><strong>Preço:</strong> {motoSelecionada.preco}</p>
                        <p><strong>Em estoque:</strong> {motoSelecionada.estoque}</p>

                        <button
                            onClick={() => setMotoSelecionada(null)}
                            className={style.closeButton}
                        >
                            Fechar
                        </button>

                    </div>

                </div>
            )}

        </div>
    );
}