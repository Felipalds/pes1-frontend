import { Admin } from "../../components/admin/Admin"

export const AdminValidator = () => {

    if (localStorage.getItem("logged")) {
        return (<Admin />)
    } else {
        return<h1> Nao logado!!!</h1>
    }
}
