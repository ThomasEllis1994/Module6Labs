import { useState } from "react";
function AddCatForm({ onAddCat }) {
    // input state values always need to be strings - empty initially
    const [name, setName] = useState("");
    const [latinName, setLatinName] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCat({ name, latinName, image });
    };
    return (
        <div className="AddCatForm componentBox">
            <form onSubmit={handleSubmit}>
                <label>
                    What big cat would you like to add?:
                    <input
                        name="catName"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    What is the Latin binomial name of the big cat?:
                    <input
                        name="catLatinName"
                        type="text"
                        value={latinName}
                        onChange={(e) => setLatinName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Please input a link to a picture of the cat:
                    <input
                        type="text"
                        value={image}
                        name="catUrl"
                        onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Add Cat</button>
            </form>
        </div>
    );
}

// try removing the onChange prop and typing in a field
export default AddCatForm;
