import Input from './input.jsx';
export default Experience;

// eslint-disable-next-line react/prop-types
function Experience({ isEditing }) {
  return (
    <>
      <Input type='text' label='Postion' isEditing={isEditing} />
      <Input type='text' label='Company' isEditing={isEditing} />
      <Input type='text' label='Duration' isEditing={isEditing} />
    </>
  );
}
