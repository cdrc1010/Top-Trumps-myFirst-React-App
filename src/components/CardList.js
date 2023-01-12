import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

const CardList = ({ cards, handleDelete }) => {
    //ARRAY USED FOR STORING TWO VALUES
    const [click, setClick] = useState([]);

    //BUTTON POW    
    const [active, setActive] = useState(true);

    //BUTTON INT
    const [active1, setActive1] = useState(true);
    // const [player1, setWin] = useState();
    // const [player2, setWin2] = useState();
    // const DataSize = 2;

    // const [limitedPage, setLimitedPage] = useState(1);
    // const SlicedData = useMemo(() => {
    //     const toShow = (limitedPage - 1) * DataSize;
    //     const fromTotal = toShow + DataSize;
    //     return cards.slice(toShow, fromTotal);
    // }, [limitedPage, cards]);

    useEffect(() => {
        if (click.length === 2) {
            if (click[0] > click[1]) {
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Keep up the good battle',
                    showConfirmButton: true,
                })
                setActive(true);
                setActive1(true);
                console.log(click);
                // setLimitedPage(limitedPage + 1);
                setClick([]);

            } else if (click[0] < click[1]) {
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Better luck next time',
                    showConfirmButton: true,
                })
                setActive(true);
                console.log(click);
                setActive1(true);
                // setLimitedPage(limitedPage + 1);
                setClick([]);

            } else {
                Swal.fire({
                    position: 'top',
                    icon: 'info',
                    title: 'Fight for this universe',
                    showConfirmButton: true,
                })
                console.log(click);
                setActive(true);
                setActive1(true);
                // setLimitedPage(limitedPage + 1);
                setClick([]);

            }
        }
    }, [click, active, active1]);



    //GETTING FIRST VALUE AND STORE IT ON THE ARRAY FOR COMPARING
    const handlePower = (pow) => {
        setClick(arr => [...arr, `${pow}`])
        //DISABLE THE INTELLIGENCE BUTTON IF THE POWER IS CLICKED
        setActive1(false);
    }

    //GETTING FIRST VALUE AND STORE IT ON THE ARRAY FOR COMPARING
    const handleIntelligence = (int) => {
        setClick(arr => [...arr, `${int}`])
        //DISABLE THE POWER BUTTON IF THE INT IS CLICKED
        setActive(false);
    }

    // FOR TESTING
    // const handleClick = (e) => {
    //     console.log(e.currentTarget.disabled);
    // }

   
    return (
        <div className="card-list">

            {/* BACKUP CODE */}
            {/* {cards.slice(0, 1).map((card) => (
                <div className="card-preview" key={card.id}>
                    <h2>{card.name}</h2>
                    <img src={card.image} alt="" />
                    {active && <button onClick={() => {
                        handlePower(`${card.power}`, `${card.id}`)
                        handleDelete(card.id)
                    }
                    }>Power: {card.power} </button>}

                    {active1 && <button onClick={() => {
                        handleIntelligence(`${card.intelligence}`)
                        handleDelete(card.id)
                    }}>intelligence: {card.intelligence} </button>}
                    <button onClick={() => handleDelete(card.id)}>Delete</button>
                    <button onClick={ handleClick}>Click</button>
                </div>
            ))} */}

            {cards.sort(() => 0.5 - Math.random()).slice(0,2).map((card) => (
                <div className="card-preview" key={card.id}>
                    {console.log("test")}

                    <h2>{card.name}</h2>
                    <img src={card.image} alt="" />
                    {active && <button onClick={() => {
                        handlePower(`${card.power}`)
                        // handleDelete(card.id)
                    }
                    }>Power: {card.power} </button>}

                    {active1 && <button onClick={() => {
                        handleIntelligence(`${card.intelligence}`)
                        // handleDelete(card.id)
                    }}>intelligence: {card.intelligence} </button>}
                    {/* <button onClick={() => handleDelete(card.id)}>Delete</button> */}
                    {/* <button onClick={ handleClick}>Click</button> */}
                </div>
            ))}

        </div>
    );
}

export default CardList;