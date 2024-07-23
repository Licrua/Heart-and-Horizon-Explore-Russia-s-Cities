import axios from "axios"
import { useEffect, useState } from "react"


type User = {
    nameUser: string,
    surname: string,
}

const MainComponent = ({nameUser, surname}: User) => {
    useEffect(() => {
       const onRequest = async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(result);
        setState(result.data)
       }
       onRequest()
    }, [])
    
   const [state, setState] = useState([])
   const [string,setString] = useState<string>('')
   

   
const onClickHander = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    console.log(state);
}

    return (
        <div>
            <p>Main Component</p>
            <p>{nameUser}</p>
            <p>{surname}</p>
            <button onClick={() => setString('dada')}>Кнопулек</button>
            <button onClick={(event) => onClickHander(event)}>Нажимай</button>
            <p>{string}</p>
        </div>
    )
}
export default MainComponent