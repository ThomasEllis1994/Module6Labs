const SingleCat = (props) => {
    return (
        <div
            style={{
                width: 300,
                height: 300,
                border: "2px solid grey",
                borderRadius: 20,
                padding: 10,
                margin: 10,
            }}
        >
            <img
                style={{
                    width: 200,
                    height: "auto",
                    borderRadius: 20,
                }}
                className="image"
                src={props.image}
                alt={props.name}
            />
            <h2>{props.name}</h2>
            <p>{props.latinName}</p>
        </div>
    );
};

export default SingleCat;
