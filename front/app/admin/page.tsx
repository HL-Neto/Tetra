import Menu from "@/app/hero/menu"
import style from "./admin.module.css"

export default function Admin() {

    const vendedores = [
        { id: 1, nome: "Carlos", vendas: 12 },
        { id: 2, nome: "Marina", vendas: 8 },
        { id: 3, nome: "João", vendas: 15 },
    ]

    const motos = [
        { id: 1, modelo: "XRE 300", marca: "Honda", estoque: 4 },
        { id: 2, modelo: "MT-07", marca: "Yamaha", estoque: 2 },
        { id: 3, modelo: "CB 500F", marca: "Honda", estoque: 6 },
    ]

    return(

        <div>

            <Menu/>

            <div className={style.body}>

                <div className={style.buttons}>

                    <button className={style.addButton}>
                        Adicionar Vendedor
                    </button>

                    <button className={style.addButton}>
                        Adicionar Moto
                    </button>

                </div>


                <div className={style.tablesContainer}>

                    <div className={style.tableBox}>

                        <h2>Vendedores</h2>

                        <table className={style.table}>

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Vendas</th>
                                </tr>
                            </thead>

                            <tbody>

                                {vendedores.map((vendedor) => (

                                    <tr key={vendedor.id}>
                                        <td>{vendedor.id}</td>
                                        <td>{vendedor.nome}</td>
                                        <td>{vendedor.vendas}</td>
                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>



                    <div className={style.tableBox}>

                        <h2>Motos em Estoque</h2>

                        <table className={style.table}>

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Modelo</th>
                                    <th>Marca</th>
                                    <th>Estoque</th>
                                </tr>
                            </thead>

                            <tbody>

                                {motos.map((moto) => (

                                    <tr key={moto.id}>
                                        <td>{moto.id}</td>
                                        <td>{moto.modelo}</td>
                                        <td>{moto.marca}</td>
                                        <td>{moto.estoque}</td>
                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    )
}