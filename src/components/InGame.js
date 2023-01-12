import { useEffect, useState } from "react";
import CardList from "./CardList";

const InGame = () => {
    const [cards, setCards] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/cards')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCards(data);
            });
    }, []);

    // const handleDelete = (id) => {
    //     const newCards = cards.filter(card => card.id !== id);
    //     setCards(newCards);  
    // }

    return (
        <div>
            <div className="in-game">
                {/* With handle delete Props*/}
                {/* {cards && <CardList cards={cards} handleDelete = {handleDelete} />} */}
                {cards && <CardList cards={cards} />}
            </div>
        </div>
    );
}

export default InGame;