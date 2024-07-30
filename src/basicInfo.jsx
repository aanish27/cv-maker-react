import Input  from "./input.jsx";
export default BasicInfo;

// eslint-disable-next-line react/prop-types
function BasicInfo({ isEditing }) {

    return (
    <>
        <Input type="text" label="First name" isEditing={isEditing} />
        <Input type="text" label="Last name" isEditing={isEditing}/>
        <Input type="text" label="Email" isEditing={isEditing}/>
        <Input type="text" label="Phone Number" isEditing={isEditing} />
    </>
    )






}
