// "use client";

// import { useState } from "react";
// import { Description, FieldError, ComboBox as HeroComboBox, ListBox as HeroListBox, Input, Key, Label } from "@heroui/react";
// // Interfaces
// import { InputGroupComponentProps } from "../../interfaces/InputField";
// // Utils
// import { cn } from "@utils/css";

// /* 
//     Usage
//     - Stanalone uncontrolled
//         - Name used for forms
//     - Controlled
//         - Create states and pass them as props
//         - Pass the state to the value prop
//         - provide a function to the onClick prop that accepts a string value
// */

// interface ComboBoxComponentProps extends Omit<InputGroupComponentProps, "onChange"> {
//     options?: any
//     onChange?: (value: Key | null) => void;
// };

// export const ComboBox = ({
//     // Base
//     id,
//     name,
//     variant = "primary",
//     label,
//     description,
//     placeholder = "Search...",
//     defaultValue,
//     value,
//     // State
//     isDisabled,
//     isRequired,
//     isInvalid,
//     fieldError,
//     // Styles
//     fullWidth,
//     fieldClassName,
//     labelClassName,
//     // Behaviour
//     onChange,
// }: ComboBoxComponentProps) => {

//     const [selectedKey, setSelectedKey] = useState<Key | null>("cat");

//     return (
//         <HeroComboBox
//             id={id}
//             name={name}
//             variant={variant}
//             defaultValue={defaultValue}
//             value={value}
//             isDisabled={isDisabled}
//             isRequired={isRequired}
//             isInvalid={isInvalid}
//             fullWidth={fullWidth}
//             className={cn(fieldClassName)}
//             onChange={onChange}
//         >
//             {
//                 label &&
//                     <Label
//                         htmlFor={id}
//                         className={labelClassName}
//                     >
//                         {label}
//                     </Label>
//             }
//             <HeroComboBox.InputGroup>
//                 <Input placeholder={placeholder} />
//                 <HeroComboBox.Trigger />
//             </HeroComboBox.InputGroup>
//             <HeroComboBox.Popover>
//                 <HeroListBox>
//                     <HeroListBox.Item id="aardvark" textValue="Aardvark">
//                         Aardvark
//                         <HeroListBox.ItemIndicator />
//                     </HeroListBox.Item>
//                     <HeroListBox.Item id="cat" textValue="Cat">
//                         Cat
//                         <HeroListBox.ItemIndicator />
//                     </HeroListBox.Item>
//                     <HeroListBox.Item id="dog" textValue="Dog">
//                         Dog
//                         <HeroListBox.ItemIndicator />
//                     </HeroListBox.Item>
//                     <HeroListBox.Item id="kangaroo" textValue="Kangaroo">
//                         Kangaroo
//                         <HeroListBox.ItemIndicator />
//                     </HeroListBox.Item>
//                     <HeroListBox.Item id="panda" textValue="Panda">
//                         Panda
//                         <HeroListBox.ItemIndicator />
//                     </HeroListBox.Item>
//                     <HeroListBox.Item id="snake" textValue="Snake">
//                         Snake
//                         <HeroListBox.ItemIndicator />
//                     </HeroListBox.Item>
//                 </HeroListBox>
//             </HeroComboBox.Popover>
//             {
//                 description &&
//                     <Description>{description}</Description>
//             }
//             {
//                 fieldError &&
//                     <FieldError>{fieldError}</FieldError>
//             }
//         </HeroComboBox>
//     );
// };