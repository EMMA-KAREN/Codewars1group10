import Leadboard from "./Leadboard"
import { noLan, jhoffner, OverZealous } from "./Profilelinks"

function Codewarriors(){
    let leaders = ['Sch3lp', 'nplus','jhoffner','GiacomoSorbi','ZozoFouchtra']
    return(
        <div>
            <h1>My three favorite codewarriors are {noLan}, {jhoffner} and {OverZealous}</h1>

            <Leadboard leaders={leaders}/>
        </div>
    )
}

export default Codewarriors;