function Greeting(props) {
    return (
        <div className="container">
            <div className="greeting">
                <p>Hello {props.name ? props.name : "World"}</p>
            </div>
            {props.children}
        </div>
    );
}

export default Greeting;
