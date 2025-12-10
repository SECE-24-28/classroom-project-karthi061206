function Display1(){
    var name="Maha"
    console.log("im inside the display1",{name})
    function ChangeName(d){
        var name=d;
        console.log("im inside the display1",{name})
    }
    function dis(a){
        console.log("im inside the display1", {a})
    }
    return (
        <>
            <h1>im from display1{name}</h1>
            <button onClick={()=>ChangeName("Aswin")}>Change Name</button>
            <button onClick={()=>dis("MahaAswin")}>click</button>
        </>
    )
}

export default Display1;