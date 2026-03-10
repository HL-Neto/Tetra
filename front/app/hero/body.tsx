import style from "./body.module.css"
import { ChartNoAxesCombined,  Motorbike  } from 'lucide-react';


export default function Body(){

    return(


       <div className={style.body}> 
            
            <ul className={style.list}>
                
                <li className={style.box}>
                    < Motorbike  size={80} />
                    <h1>ESTOQUE</h1>
                
                </li>
                
                
                
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
            
            </ul>
       
       </div>


    );
} 