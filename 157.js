
function convertToUppercase(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  return str.toUpperCase();
}try {
    console.log(convertToUppercase("ram"));     
  } catch (error) {
    console.error(error.message);
  }
