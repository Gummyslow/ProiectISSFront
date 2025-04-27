import React, { useState } from "react";
import "./AdminLogin.css";
import ReactDOM from "react-dom";
import {Plus, Shield } from 'lucide-react';
// @ts-ignore
import AddEventToggle from '../../Toggles/AddEventToggleDir/AddEventToggle.tsx';
// @ts-ignore
import ListEventsToggle from '../../Toggles/ListEventsToggle/ListEventsToggle.tsx';
// @ts-ignore
import CustomToggleDown from "../../Toggles/ListEventsToggle/ListEventsToggle.tsx";
// @ts-ignore
import UpdateEventToggle from '../../Toggles/UpdateEventToggle/UpdateEventToggle.tsx';
// @ts-ignore
import DeleteEventToggle from "../../Toggles/DeleteEventToggle/DeleteEventToggle.tsx";


const AdminLogin = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [adminCode, setAdminCode] = useState('');
    const [showEditForm, setShowEditForm] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // Mută aici starea isOpen
    const [isAddEventFormOpen, setAddEventFormOpen] = useState(false);
    const [isUpdateEventFormOpen, setUpdateEventFormOpen] = useState(false);
    const [isDeleteEventFormOpen, setDeleteEventFormOpen] = useState(false);
    const toggleFormDropdown = () => setAddEventFormOpen(!isAddEventFormOpen);
    const updateEventToggle = () => setUpdateEventFormOpen(!isUpdateEventFormOpen)
    const deleteEventToggle = () => setDeleteEventFormOpen(!isDeleteEventFormOpen)


    //lista cu evenimentele hard-codate
    const eventList = [
        {
            name: "Romeo si Julieta",
            duration: "1.5h",
            capacity: "95/100",
            date: "25/04/2025"
        },
        {
            name: "O noapte furtunoasa",
            duration: "2h",
            capacity: "100/100",
            date: "26/04/2025"
        },
        {
            name: "Oscar si tanti Roz",
            duration: "1.25h",
            capacity: "98/100",
            date: "27/04/2025"
        }
    ];
    //toggle-u cu lista de evenimente

    const handleExitClick = () => {
        setIsVisible(false);
    };

    const handleInputChange = (event) => {
        setAdminCode(event.target.value);
    };

    const handleSetCode = () => {
        if (adminCode === "123456") {
            setShowEditForm(true);
        } else {
            alert("Cod invalid!");
        }
    };

    const toggleDropdown = () => { // Mută și funcția toggleDropdown aici
        setIsOpen(!isOpen);
    };

    const renderContent = () => {
        if (!isVisible) {
            return null;
        }

        if (showEditForm) {
            return (
                <div className={"editFormOverlay"}>
                    <div className={"editForm"} style={{ position: "relative" }}>
                        <button
                            className="exitEditFormBtn"
                            onClick={handleExitClick}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                background: "transparent",
                                border: "none",
                                fontSize: "24px",
                                cursor: "pointer",
                                color: "#fff"
                            }}
                        >
                            ×
                        </button>

                        <h2 className={"h2Titlu"}>
                            Bun venit in <span style={{ color: "#E1114B" }}>Admin Mode <Shield
                            size={28} color="#E1114B" strokeWidth={1.5} /></span>
                        </h2>

                        <p className={"smallText2"}>
                            Mai jos gasesti lista operatiunilor disponibile in modul de administrator.
                            Nu uita sa salvezi modificarile facute inainte de inchiderea filei.
                        </p>

                        <AddEventToggle
                            isOpen={isAddEventFormOpen}
                            toggleDropdown={toggleFormDropdown}
                        />
                        <UpdateEventToggle
                            items={eventList}
                            isOpen={isUpdateEventFormOpen}
                            toggleDropdown={updateEventToggle}
                        />
                        <CustomToggleDown
                            items={eventList}
                            isOpen={isOpen}
                            toggleDropdown={toggleDropdown}
                        />
                        <DeleteEventToggle
                            items={eventList}
                            isOpen={isDeleteEventFormOpen}
                            toggleDropdown={deleteEventToggle}
                        />
                        <br/>
                        <br/>
                        <button
                            type="submit"
                            className={"addEventBtn"}
                            style={{ marginLeft: "65px" }}
                        >
                            Salveaza modificarile
                        </button>
                    </div>
                </div>

            );
        }

        return (
            <div className={"adminLoginOverlay"}>
                <div className={"adminLoginForm"}>
                    <button className={"exitBtn"} onClick={handleExitClick}>X</button>
                    <h2 className={"h2"}>Acceseaza <span style={{ color: "#E1114B" }}>Admin Mode <Shield size={28}
                                                                                                         color="#E1114B"
                                                                                                         strokeWidth={1.5} /></span>
                    </h2>
                    <br />
                    <p className={"smallText"}>Pentru a face modificari asupra evenimentului curent, introdu codul
                        de siguranta de 6 cifre:</p>
                    <label>
                        <input
                            type="text"
                            className={"inputBox"}
                            value={adminCode}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button className={"btnSendCode"} onClick={handleSetCode}>Trimite</button>
                </div>
            </div>
        );
    };

    return ReactDOM.createPortal(
        renderContent(),
        document.getElementById("modal-root")
    );
}

export default AdminLogin;
