
import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const PickCategory = props => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Category
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>All categories</DropdownItem>
        <DropdownItem disabled>Incomes</DropdownItem>
        <DropdownItem>Work</DropdownItem>
        <DropdownItem>Freelancing</DropdownItem>
        <DropdownItem>Teaching and tutoring</DropdownItem>
        <DropdownItem>Refunds</DropdownItem>
        <DropdownItem divider />
        <DropdownItem disabled>Expenses</DropdownItem>
        <DropdownItem>Eat Out</DropdownItem>
        <DropdownItem>Education</DropdownItem>
        <DropdownItem>Alcohol</DropdownItem>
        <DropdownItem>Grocery</DropdownItem>
        <DropdownItem>Bills and utilities</DropdownItem>
        <DropdownItem>Miscellaneous</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default PickCategory;