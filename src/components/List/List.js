import React from "react";
import styled from "styled-components";

const LIstWrapper = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.span`
  font-weight: strong;
`;

const Title = styled.h2`
  padding: 10px 0;
  border-bottom: 1px solid lightGrey;
`;

const List = ({ items, title }) => (
  <>
    <Title>{title}</Title>
    <LIstWrapper>
      {items.map(item => (
        <ListItem key={item.label}>
          <Label>{item.label}</Label>
          {item.value}
        </ListItem>
      ))}
    </LIstWrapper>
  </>
);

export default List;
