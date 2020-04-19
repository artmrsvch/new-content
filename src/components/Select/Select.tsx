import React from "react";

const Select: React.FC = () => {
    return (
      <select className="select" name="status">
        <option value="1">Выполняется</option>
        <option value="2">Добавлено</option>
        <option value="3">Не добавлено</option>
      </select>
    );
};

export default Select;
