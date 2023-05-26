const transformDate = (date: string) => {
  const datePart = date.split("T")[0];
  const dateParts = datePart.split("-");

  const americanDate = dateParts[1] + "/" + dateParts[2] + "/" + dateParts[0];

  return americanDate;
};

export default transformDate;
