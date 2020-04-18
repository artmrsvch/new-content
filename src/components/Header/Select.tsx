import React from "react";

const Select: React.FC = () => {
    return (
      <select className="header-select" name="status">
        <option value="">Выполняется</option>
        <option value="">Добавлено</option>
        <option value="">Не добавлено</option>
      </select>
    );
};

export default Select;
