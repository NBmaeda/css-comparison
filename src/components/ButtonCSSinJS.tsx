import styled from "@emotion/styled";

const Button = styled.button`
  box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  color: rgb(17 24 39 / 1);
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem;
  background-color: rgb(255 255 255 / 1);
  border-color: rgb(255 255 255 / 1);
  border-width: 2px;
  border-radius: 0.375rem;
  white-space: nowrap;
  width: 50%;
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    --tw-border-opacity: 1;
    border-color: rgb(67 56 202 / var(--tw-border-opacity));
  }
  @media (min-width: 640px) {
    width: auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const ButtonCSSinJS: React.FC = () => {
  return <Button>Button</Button>;
};

export default ButtonCSSinJS;
