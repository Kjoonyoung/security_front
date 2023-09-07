function Home() {
    const check = () => {
        // const a = {name:"김준영", id:"olied1", aa:{ name: "변경이름" }}
        // const b = {phone:"김준1", password:"olied2"}
        // const c = {name:"준일"}
        // const d = { ...a }
        // d.aa.name = "안녕"

        // console.log(a) // spread 문법
        // console.log(d) // spread 문법
    }
    return(
        <div>
            Home
            <button onClick={check}>check</button>
        </div>
    );
}

export default Home