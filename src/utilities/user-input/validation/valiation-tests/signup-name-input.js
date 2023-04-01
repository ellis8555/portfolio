const singupUsernameValidator = (value) => {
  if (value.length > 1) {
    return true;
  }
  return false;
};

export { singupUsernameValidator };
