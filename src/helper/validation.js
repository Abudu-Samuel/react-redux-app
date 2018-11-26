import Validator from 'validatorjs';

const rules = {
  title: 'required|alpha',
  category: 'required|alpha',
  authorId: 'required',
  length: 'required'
};

const errorMessages = {
  required: 'this field is required',
  alpha: 'this field can only be letters'
};

const validateCourseCreation = (courseData) => {
  const validation = new Validator(courseData, rules, errorMessages);
  validation.passes();
  // if (!validator.isAlpha(courseData.title)) {
  //   errors.title = 'Title must be alphabets';
  // }
  return validation.errors.all();
};

export default validateCourseCreation;