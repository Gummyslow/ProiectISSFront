import React from "react";
import { Plus, Pen, Search } from "lucide-react";
import "./UpdateEventToggle.css";

const UpdateEventToggle = ({items, isOpen, toggleDropdown }) => {
    return (
        <div className={`customToggleDown ${isOpen ? 'open' : ''}`}>
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
               Modifica un eveniment existent
                <span style={{ fontSize: "18px" }}>
                    {isOpen ? "▼" : <Pen size={24} color="white" />}
                </span>
            </div>
            {isOpen && (
                <form className="eventForm" style={{ marginTop: "10px" }}>
                    <div className="searchContainer">
                        <Search className="searchIcon" size={20} color="#888" />
                        <input type="text" placeholder="Cauta eveniment" className="searchBox" />
                    </div>
                    <input type="text" placeholder="Nume eveniment" className="inputBox2" />
                    <input type="text" placeholder="Durata (ex: 1.5h)" className="inputBox2" />
                    <input type="text" placeholder="Descriere" className="inputBox2" />
                    <input type="text" placeholder="Scor (ex: 95/100)" className="inputBox2" />
                    <input type="date" className="inputBox2" />
                    <button type="submit" className={"addEventBtn"}>Salveaza modificarile</button>
                </form>
            )}
        </div>
    );
};

export default UpdateEventToggle;