
import React from "react";
import { Plus } from "lucide-react";
import "./AddEventToggle.css";

const AddEventToggle = ({ isOpen, toggleDropdown }) => {
    return (
        <div className={`addEventToggle ${isOpen ? 'open' : ''}`}>
            <div
                className="title"
                onClick={toggleDropdown}
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                }}
            >
                Adauga un eveniment nou
                <span style={{ fontSize: "18px" }}>
                    {isOpen ? "▼" : <Plus size={20} color="white" />}
                </span>
            </div>
            {isOpen && (
                <form className="eventForm" style={{ marginTop: "10px" }}>
                    <input type="text" placeholder="Nume eveniment" className="inputBox2" />
                    <input type="text" placeholder="Durata (ex: 1.5h)" className="inputBox2" />
                    <input type="text" placeholder="Descriere" className="inputBox2" />
                    <input type="text" placeholder="Scor (ex: 95/100)" className="inputBox2" />
                    <input type="date" className="inputBox2" />
                    <button type="submit" className={"addEventBtn"}>Adaugă eveniment</button>
                </form>
            )}
        </div>
    );
};

export default AddEventToggle;
