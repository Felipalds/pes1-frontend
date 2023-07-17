import axios from 'axios'
import React from 'react'
import {FieldArray, Form, Formik} from "formik"

export const Admin = () => {

    const [ professionals, setProfessionals ] = React.useState([])
    const [ procedures, setProcedures ] = React.useState([])


    React.useEffect(() => {
        if(professionals.length === 0)
        axios
        .get("http://localhost:3001/professionals")
        .then(res => {
            setProfessionals(res.data)
        })

        if(procedures.length === 0)
        axios
        .get("http://localhost:3001/procedures")
        .then(res => {
            setProcedures(res.data)
        })
        }
        
    )


    const handleAdd = () => {

        const name = document.getElementById("addName").value
        const description = document.getElementById("addDescription").value
        const slug = document.getElementById("addSlug").value

        axios.post("http://localhost:3001/professionals", {name, description, slug})

        setProfessionals(professionals => [...professionals, { name,  description, slug }])
        document.getElementById("addName").value = ""
        document.getElementById("addDescription").value = ""
        document.getElementById("addSlug").value = ""

    }

    const handleAddProcedure = () => {

        const name = document.getElementById("addProcedureName").value
        const description = document.getElementById("addProcedureDescription").value
        const slug = document.getElementById("addProcedureSlug").value

        axios.post("http://localhost:3001/procedures", {name, description, slug})

        setProcedures(procedures => [...procedures, { name,  description, slug }])
        document.getElementById("addProcedureName").value = ""
        document.getElementById("addProcedureDescription").value = ""
        document.getElementById("addProcedureSlug").value = ""

    }

    return (
        <div>
            <h1>Admin</h1>
            <h2>Formulário de profissionais</h2>
            <form onSubmit={e => {e.preventDefault()}} >
                {professionals.map(p => {
                    return(<div style={{"paddingBottom" : "50px"}}>
                        nome:<input defaultValue={p.name} placeholder="Nome" type="text" disabled={true}></input>
                        descricao:<input defaultValue={p.description} placeholder="Descrição" type="text" disabled={true}></input>
                        slug:<input defaultValue={p.description} placeholder="Slug" type="text" disabled={true}></input>
                    </div>)
                })}
                <hr />
                <input placeholder="Nome" type="text" id="addName"></input>
                <input placeholder="Descrição" type="text" id="addDescription"></input>
                <input placeholder="Slug" type="text" id="addSlug"></input>

                <button onClick={() => handleAdd()}> Adicionar </button>
            </form>


            <h2>Formulário de procedimentos</h2>
            <form onSubmit={e => {e.preventDefault()}} >
                {procedures.map(p => {
                    return(<div style={{"paddingBottom" : "50px"}}>
                        nome:<input defaultValue={p.name} placeholder="Nome" type="text" disabled={true}></input>
                        descricao:<input defaultValue={p.description} placeholder="Descrição" type="text" disabled={true}></input>
                        slug:<input defaultValue={p.slug} placeholder="Slug" type="text" disabled={true}></input>
                    </div>)
                })}
                <hr />
                <input placeholder="Nome" type="text" id="addProcedureName"></input>
                <input placeholder="Descrição" type="text" id="addProcedureDescription"></input>
                <input placeholder="Slug" type="text" id="addProcedureSlug"></input>

                <button onClick={() => handleAddProcedure()}> Adicionar </button>
            </form>


        </div>
    )
}
