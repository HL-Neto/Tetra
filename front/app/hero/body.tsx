import style from "./body.module.css"
import { ChartNoAxesCombined,  Motorbike , PersonStandingIcon } from 'lucide-react';


export default function Body(){

    return(


       <div className={style.body}> 
            
            <ul className={style.list}>
                

                <a
                    href="/estoque"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <li className={style.box}>
                        < Motorbike  size={80} />
                        <h1>ESTOQUE</h1>
                    
                    </li>

                </a>
                
                
                
                <a
                    href="/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <li className={style.box}>
                        <ChartNoAxesCombined size={80} />
                        
                        <h1>DASHBOARD</h1>
                    
                    </li>
                
                </a>




                <a
                    href="/vendedor"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <li className={style.box}>
                        <PersonStandingIcon size={80} />
                        
                        <h1>VENDEDORES</h1>
                    
                    </li>
                
                </a>
            
            </ul>
       
       </div>


    );
} 