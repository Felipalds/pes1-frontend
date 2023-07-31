import { Admin } from "../../components/admin/admin"

export const adminValidator = () => {


    if (localStorage.getItem("logged")) {
        return (<Admin />)
    } else {
        <h1> N"ao logado!!!</h1>
    }
   
}
