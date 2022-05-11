function Noticia() {
    const noticia = {
        titulo:"Curso react 2022",
        descripcion : "demostracion de noticia en react"
    }
    const { titulo , descripcion } = noticia
    return(
        <div className="mi clase">
        <h1 className= "mi titulo">Mi Noticia{titulo}</h1>
        </div>
    )
}
export default Noticia
