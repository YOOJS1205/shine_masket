import React, { memo } from 'react';
import styled from 'styled-components';

interface IProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLast: boolean;
  defaultValue: string;
}

interface IInput {
  isLast: boolean;
}

export default memo(function UserInfoInput({
  placeholder,
  onChange,
  isLast,
  defaultValue,
}: IProps) {
  return (
    <Input
      placeholder={placeholder}
      onChange={onChange}
      isLast={isLast}
      defaultValue={defaultValue}
    />
  );
});

const Input = styled.input<IInput>`
  display: block;
  width: calc(100% - 20px);
  margin-bottom: ${(props) => (props.isLast ? '30px' : '14px')};
  padding: 10px;
  background-color: #ffffff;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid #dbdbdb;
  font-size: 14px;
  line-height: 14px;
  &:focus {
    border-bottom-color: var(--color-enabled-dark);
  }
`;
