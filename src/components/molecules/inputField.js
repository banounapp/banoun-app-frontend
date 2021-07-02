import { TextField, Icons, } from "../atoms";

const inputField = ({ iconsProps, textFieldProps, SpecificStyle = "flex mr-20 my-4 my-4 mx-10 "
}) => {
  return (
    <div className={SpecificStyle}>
      <Icons icon={iconsProps.icon} />
      <TextField {...textFieldProps} />

    </div>
  );
};

export default inputField;