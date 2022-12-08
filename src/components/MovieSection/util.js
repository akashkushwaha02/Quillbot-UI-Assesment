//For slicing it into 5 grid columns for detail card
export function slicing(filterData, chunk) {
  let result = [];
  for (let i = 0; i < filterData.length; i += chunk) {
    result.push(filterData.slice(i, i + chunk));
  }
  return result;
}
