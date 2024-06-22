import SingleCat from "./SingleCat";

export const BigCats = () => {
    const cats = [
        {
            id: 1,
            name: "Cheetah",
            latinName: "Acinonyx jubatus",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiSZ9ygEI39KQCwxJpRjG13jM0W7QlZEQsVHFddvP9K63yqCv",
        },
        {
            id: 2,
            name: "Cougar",
            latinName: "Puma concolor",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/440px-Mountain_Lion_in_Glacier_National_Park.jpg",
        },
        {
            id: 3,
            name: "Jaguar",
            latinName: "Panthera onca",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/520px-Standing_jaguar.jpg",
        },
        {
            id: 4,
            name: "Leopard",
            latinName: "Panthera pardus",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/440px-African_leopard_male_%28cropped%29.jpg",
        },
        {
            id: 5,
            name: "Lion",
            latinName: "Panthera leo",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/440px-Lion_waiting_in_Namibia.jpg",
        },
        {
            id: 6,
            name: "Snow leopard",
            latinName: "Panthera uncia",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/440px-Irbis4.JPG",
        },
        {
            id: 7,
            name: "Tiger",
            latinName: "Panthera tigris",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/520px-Walking_tiger_female.jpg",
        },
    ];
    return (
        <ul>
            {/* can use {} below after => to instantiate variables if needed, but will need an implicit return too */}
            {cats.map((cat) => {
                // return (
                //     <li key={cat.id}>
                //         <h2>{cat.name}</h2>
                //         <p>{cat.latinName}</p>
                //     </li>
                // );
                return (
                    <SingleCat
                        key={cat.id}
                        image={cat.image}
                        name={cat.name}
                        latinName={cat.latinName}
                    />
                );
            })}
        </ul>
    );
};
