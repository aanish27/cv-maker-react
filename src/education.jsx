import Input from './input.jsx';
export default Education;

// eslint-disable-next-line react/prop-types
function Education({ isEditing }) {
  return (
    <>
      <Input type='text' label='School' isEditing={isEditing} />
      <Input type='text' label='Study/Course' isEditing={isEditing} />
      <Input type='text' label='Start Year' isEditing={isEditing} />
      <Input type='text' label='End Year' isEditing={isEditing} />
    </>
  );
}
