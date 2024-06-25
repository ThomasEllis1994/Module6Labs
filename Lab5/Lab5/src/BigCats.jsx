import SingleCat from "./SingleCat";
import AddCatForm from "./CatForm";
import { useState } from "react";

const BigCats = () => {
    const cats = [
        {
            id: 4,
            name: "Leopard",
            latinName: "Panthera pardus",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/440px-African_leopard_male_%28cropped%29.jpg",
        },
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
    const newCats = [...cats];

    const [currentCats, setCurrentCats] = useState(newCats);

    //Button Functions
    //all cats
    function allCats() {
        setCurrentCats(newCats);
    }

    //sorter
    function sorter(num = 1) {
        let catsFiltered = newCats.sort((a, b) => {
            const cat1 = a.name.toUpperCase();
            const cat2 = b.name.toUpperCase();
            if (cat1 > cat2) {
                return num * 1;
            }
            if (cat1 < cat2) {
                return num * -1;
            } else return 0;
        });
        // console.log(catsFiltered);
        setCurrentCats(catsFiltered);
    }
    // Family Filter
    function familyFilter(family = "panthera") {
        let catsFiltered = cats.filter((cat) => {
            return (
                cat.latinName.split(" ")[0].toUpperCase() ===
                family.toUpperCase()
            );
        });

        setCurrentCats(catsFiltered);
    }

    const handleAddCat = (newCat) => {
        newCat.id = currentCats.length + 1; // unreliable but succinct
        setCurrentCats([...currentCats, newCat]);
    };
    const deleteCat = (id) => {
        const newCats = cats.filter((cat) => cat.id !== id);
        setCurrentCats(newCats);
    };

    // const bigCats = currentCats.map((cat) => {
    //     console.log(cat);
    //     return (
    //         <SingleCat
    //             key={cat.id}
    //             image={cat.image}
    //             name={cat.name}
    //             latinName={cat.latinName}
    //         />
    //     );
    // });
    // console.log(bigCats);

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignContent: "center",
                }}
                className="container"
            >
                {/* for some reason, the reverse sort does not work at first. Must click the family filter button first and then all buttons work properly? */}
                <button onClick={() => allCats()}>Show All</button>
                <button onClick={() => sorter()}>Sort Alphabetically</button>
                <button onClick={() => sorter(-1)}>
                    Sort Reverse-Alphabetically
                </button>
                <button onClick={() => familyFilter()}>Filter by Family</button>
                <AddCatForm onAddCat={handleAddCat} />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignContent: "center",
                    }}
                >
                    {currentCats.map((cat) => {
                        return (
                            <SingleCat
                                key={cat.id}
                                image={cat.image}
                                name={cat.name}
                                latinName={cat.latinName}
                                deleteCat={deleteCat(cat.id)}
                            />
                        );
                    })}
                    ;
                </div>
            </div>
        </>
    );
};

export default BigCats;
