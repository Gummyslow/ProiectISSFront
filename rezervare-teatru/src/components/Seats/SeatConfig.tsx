import React, { useState } from "react";
import "./SeatConfig.css";

const SeatMap = () => {
    const [seats, setSeat] = useState([
        { id: "1A", occupied: false }, { id: "1B", occupied: false }, { id: "1C", occupied: false }, { id: "1D", occupied: false }, { id: "1E", occupied: false }, { id: "1F", occupied: false }, { id: "1G", occupied: false }, { id: "1H", occupied: false }, { id: "1I", occupied: false }, { id: "1J", occupied: false }, { id: "1K", occupied: false }, { id: "1L", occupied: false }, { id: "1M", occupied: false }, { id: "1N", occupied: false },
        { id: "2A", occupied: false }, { id: "2B", occupied: false }, { id: "2C", occupied: false }, { id: "2D", occupied: false }, { id: "2E", occupied: false }, { id: "2F", occupied: false }, { id: "2G", occupied: false }, { id: "2H", occupied: false }, { id: "2I", occupied: false }, { id: "2J", occupied: false }, { id: "2K", occupied: false }, { id: "2L", occupied: false }, { id: "2M", occupied: false }, { id: "2N", occupied: false },
        { id: "3A", occupied: false }, { id: "3B", occupied: false }, { id: "3C", occupied: false }, { id: "3D", occupied: false }, { id: "3E", occupied: false }, { id: "3F", occupied: false }, { id: "3G", occupied: false }, { id: "3H", occupied: false }, { id: "3I", occupied: false }, { id: "3J", occupied: false }, { id: "3K", occupied: false }, { id: "3L", occupied: false }, { id: "3M", occupied: false }, { id: "3N", occupied: false },
        { id: "4A", occupied: false }, { id: "4B", occupied: false }, { id: "4C", occupied: false }, { id: "4D", occupied: false }, { id: "4E", occupied: false }, { id: "4F", occupied: false }, { id: "4G", occupied: false }, { id: "4H", occupied: false }, { id: "4I", occupied: false }, { id: "4J", occupied: false }, { id: "4K", occupied: false }, { id: "4L", occupied: false }, { id: "4M", occupied: false }, { id: "4N", occupied: false },
        { id: "5A", occupied: false }, { id: "5B", occupied: false }, { id: "5C", occupied: false }, { id: "5D", occupied: false }, { id: "5E", occupied: false }, { id: "5F", occupied: false }, { id: "5G", occupied: false }, { id: "5H", occupied: false }, { id: "5I", occupied: false }, { id: "5J", occupied: false }, { id: "5K", occupied: false }, { id: "5L", occupied: false }, { id: "5M", occupied: false }, { id: "5N", occupied: false },
        { id: "6A", occupied: false }, { id: "6B", occupied: false }, { id: "6C", occupied: false }, { id: "6D", occupied: false }, { id: "6E", occupied: false }, { id: "6F", occupied: false }, { id: "6G", occupied: false }, { id: "6H", occupied: false }, { id: "6I", occupied: false }, { id: "6J", occupied: false }, { id: "6K", occupied: false }, { id: "6L", occupied: false }, { id: "6M", occupied: false }, { id: "6N", occupied: false },
        { id: "7A", occupied: false }, { id: "7B", occupied: false }, { id: "7C", occupied: false }, { id: "7D", occupied: false }, { id: "7E", occupied: false }, { id: "7F", occupied: false }, { id: "7G", occupied: false }, { id: "7H", occupied: false }, { id: "7I", occupied: false }, { id: "7J", occupied: false }, { id: "7K", occupied: false }, { id: "7L", occupied: false }, { id: "7M", occupied: false }, { id: "7N", occupied: false },
        { id: "8A", occupied: false }, { id: "8B", occupied: false }, { id: "8C", occupied: false }, { id: "8D", occupied: false }, { id: "8E", occupied: false }, { id: "8F", occupied: false }, { id: "8G", occupied: false }, { id: "8H", occupied: false }, { id: "8I", occupied: false }, { id: "8J", occupied: false }, { id: "8K", occupied: false }, { id: "8L", occupied: false }, { id: "8M", occupied: false }, { id: "8N", occupied: false },
        { id: "9A", occupied: false }, { id: "9B", occupied: false }, { id: "9C", occupied: false }, { id: "9D", occupied: false }, { id: "9E", occupied: false }, { id: "9F", occupied: false }, { id: "9G", occupied: false }, { id: "9H", occupied: false }, { id: "9I", occupied: false }, { id: "9J", occupied: false }, { id: "9K", occupied: false }, { id: "9L", occupied: false }, { id: "9M", occupied: false }, { id: "9N", occupied: false },
        { id: "10A", occupied: false }, { id: "10B", occupied: false }, { id: "10C", occupied: false }, { id: "10D", occupied: false }, { id: "10E", occupied: false }, { id: "10F", occupied: false }, { id: "10G", occupied: false }, { id: "10H", occupied: false }, { id: "10I", occupied: false }, { id: "10J", occupied: false }, { id: "10K", occupied: false }, { id: "10L", occupied: false }, { id: "10M", occupied: false }, { id: "10N", occupied: false }
    ]);

    const changeSeatState = (id) => {
        setSeat(prevState => prevState.map(seat =>
            seat.id === id ? { ...seat, occupied: !seat.occupied } : seat
        ));
    };

    return (
        <div>
            <h2 className={"h2Title"}>Harta locurilor</h2>
            <div className="seats">
                    {seats.map(seat => (
                        <button
                            key={seat.id}
                            className={`seat ${seat.occupied ? "occupied" : "available"}`}
                            onClick={() => changeSeatState(seat.id)}
                        >
                        </button>
                    ))}
            </div>
        </div>
    );
}

export default SeatMap;
