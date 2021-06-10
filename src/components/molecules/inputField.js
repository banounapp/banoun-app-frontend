import { TextField, Icons } from '../atoms';


export const inputField = ({ iconsProps, textFieldProps }) => {
     return (
          <div className='flex mr-10 '>
               <Icons icon={iconsProps.icon} />
               <TextField  {...textFieldProps} />
          </div>
     );
}

