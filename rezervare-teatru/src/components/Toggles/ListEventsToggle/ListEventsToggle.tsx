import React from 'react';

interface CustomToggleDownProps {
    items: string[];
    isOpen: boolean;
    toggleDropdown: () => void;
}

const CustomToggleDown: React.FC<CustomToggleDownProps> = ({ items, isOpen, toggleDropdown }) => {
    return (
        <div className="customToggleDown1">
            <div
                className="title"
                onClick={toggleDropdown}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
            >
                Vezi lista de evenimente
                <span style={{ fontSize: '18px' }}>
                   {isOpen ? '▼' : '►'}
                </span>
            </div>

            {isOpen && (
                <ul className="dropdown-list">
                    {items.map((item, index) => (
                        <li key={index} className="dropdown-item">
                            <strong>{item.name}</strong> — {item.duration} — {item.capacity} — {item.date}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomToggleDown;
