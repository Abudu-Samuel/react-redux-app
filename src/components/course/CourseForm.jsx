import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({
  course, allAuthors, onSave, onChange, errors, isSaving, courseToModify
}) => (
  <form>
    <TextInput
        name="title"
        label="Title"
        defaultValue={courseToModify.title}
        onChange={onChange}
        placeholder="Title"
        error={errors.title}
      />
    <SelectInput
    name="authorId"
    label="Author"
    defaultValue={courseToModify.authorId}
    defaultOption="Select Author"
    options={allAuthors}
    onChange={onChange}
    error={errors.authorId}
    />

    <TextInput
      name="category"
      label="Category"
      placeholder="Category"
      defaultValue={courseToModify.category}
      onChange={onChange}
      error={errors.category}
    />

    <TextInput
      name="length"
      label="Length"
      placeholder="Length"
      onChange={onChange}
      defaultValue={courseToModify.length}
      error={errors.length}
    />

    <input
      name="submit"
      disabled={isSaving}
      defaultValue={isSaving ? 'saving' : 'Save'}
      className="btn btn-sm btn-primary"
      onClick={onSave}
    />
  </form>
);

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired
};

export default CourseForm;