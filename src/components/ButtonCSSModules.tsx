import style from "./ButtonCSSModules.module.css";

const ButtonCSSModules: React.FC = () => {
  return (
    <button type="button" className={style.button}>
      Button
    </button>
  );
};

export default ButtonCSSModules;
