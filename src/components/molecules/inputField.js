import { TextField, Icons } from "../atoms";

const inputField = ({ iconsProps, textFieldProps }) => {
  return (
    <div className="flex mr-20 my-4 mx-10 md:relative md:right-20">
      <Icons icon={iconsProps.icon} />
      <TextField {...textFieldProps} />

    </div>
  );
};

export default inputField;
