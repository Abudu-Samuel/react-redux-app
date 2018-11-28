export default {
  courses: [
    {
      id: 'test-case-1',
      title: 'Test case one',
      watchHref: 'http://test_case_one',
      authorId: 'tester_1',
      lenght: '7:09',
      category: 'React-Redux'
    },
    {
      id: 'test-case-2',
      title: 'Test case two',
      watchHref: 'http://test_case_two',
      authorId: 'tester_2',
      lenght: '2:30',
      category: 'Ruby on rails'
    },
    {
      id: 'test-case-3',
      title: 'Test case three',
      watchHref: 'http://test_case_three',
      authorId: 'tester_1',
      lenght: '4:65',
      category: 'Java'
    }
  ],
  updatedCourse: {
    id: 'test-case-1',
    title: 'Test case one just got updated',
    watchHref: 'http://test_case_one',
    authorId: 'tester_1',
    lenght: '7:09',
    category: 'React-Redux and test'
  },
  validInput: {
    title: 'vue js for starters',
    authorId: 'sarah jobs',
    lenght: '3:22',
    category: 'valid test'
  },
  invalidInput: {
    title: 'An',
    category: 'vue js'
  },
  sortedCourses: {
    courses: [
      {
        id: 'architecture',
        title: 'Architecting Applications for the Real World',
        watchHref: 'http://www.pluralsight.com/courses/architecting-applications-dotnet',
        authorId: 'cory-house',
        length: '2:52',
        category: 'Software Architecture'
      },
      {
        id: 'career-reboot-for-developer-mind',
        title: 'Becoming an Outlier: Reprogramming the Developer Mind',
        watchHref: 'http://www.pluralsight.com/courses/career-reboot-for-developer-mind',
        authorId: 'cory-house',
        length: '2:30',
        category: 'Career'
      }
    ],
    currentPage: 1,
    sortedNames: [
      {
        id: 'architecture',
        title: 'Architecting Applications for the Real World',
        watchHref: 'http://www.pluralsight.com/courses/architecting-applications-dotnet',
        authorId: 'cory-house',
        length: '2:52',
        category: 'Software Architecture'
      },
      {
        id: 'career-reboot-for-developer-mind',
        title: 'Becoming an Outlier: Reprogramming the Developer Mind',
        watchHref: 'http://www.pluralsight.com/courses/career-reboot-for-developer-mind',
        authorId: 'cory-house',
        length: '2:30',
        category: 'Career'
      }
    ],
    totalCourses: 5
  }
};