import styled from "@emotion/styled";

const shadowColor = "";
const Button = styled.button`
  box-shadow: 0 0 ${shadowColor}, 0 0 ${shadowColor},
    0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  color: white;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem;
  background-color: rgba(37, 99, 235, 1);
  border-radius: 0.375rem;
  white-space: nowrap;
  width: 50%;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 ${shadowColor}, 0 0 ${shadowColor},
      0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    background-color: rgba(30, 64, 175, 1);
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
