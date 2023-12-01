
function demoHeader({name, title}) {
    return  (
        <div style={{background:'yellow', padding:15, width:400}}>
            <h1>Header {name}</h1>
            <h3>{title}</h3>
            <p>This is header component for learning purpose</p>
        </div>
    );
}

export default demoHeader