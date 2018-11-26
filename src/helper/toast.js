import toastr from 'toastr';

const toast = {
  success: (showMessage) => {
    toastr.clear();
    toastr.success(showMessage);
  },
  error: (showMessage) => {
    toastr.clear();
    toastr.error(showMessage);
  }
};

export default toast;