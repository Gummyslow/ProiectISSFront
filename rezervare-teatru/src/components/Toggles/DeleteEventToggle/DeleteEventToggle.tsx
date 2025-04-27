import React from 'react';
import { Trash2 } from 'lucide-react'; // <-- importăm icon-ul de coș
import "./DeleteEventToggle..css";

interface EventItem {
    name: string;
    duration: string;
    capacity: string;
    date: string;
}

interface DeleteEventToggleProps {
    items: EventItem[];
    isOpen: boolean;
    toggleDropdown: () => void;
}

const DeleteEventToggle: React.FC<DeleteEventToggleProps> = ({ items, isOpen, toggleDropdown }) => {
    return (
        <div className="deleteEventToggle">
            <div
                className="title"
                onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown();
                }}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
            >
                Sterge evenimente din lista
                <span style={{ fontSize: '18px' }}>
                    {isOpen ? '▼' : <Trash2 size={20} color="white" style={{ cursor: 'pointer' }} />}
                </span>
            </div>

            {isOpen && (
                <ul className="dropdown-list">
                    {items.map((item, index) => (
                        <li key={index} className="dropdown-item" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '8px'
                        }}>
                            <div>
                                <strong>{item.name}</strong> — {item.duration} — {item.capacity} — {item.date}
                            </div>
                            <Trash2 size={20} color="#E1114B" style={{ cursor: 'pointer' }} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DeleteEventToggle;
