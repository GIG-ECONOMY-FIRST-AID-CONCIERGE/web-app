const transformValues = (
  values: any,
  description: string,
  isReplied: boolean
) => {
  const newAssistance: any[] = [];
  values?.assistances?.forEach((assistance: any) => {
    newAssistance.push(assistance);
  });
  return {
    id: values?.id,
    address: {
      street: values?.address?.street,
      number: values?.address?.number,
      postalCode: values?.address?.postalCode,
      city: values?.address?.city,
      state: values?.address?.state,
      coordX: values?.address?.coordX,
      coordY: values?.address?.coordY,
    },
    partnerId: values?.partnerId,
    assistances: newAssistance.length > 0 ? newAssistance : [],
    description: description,
    repliedNotification: isReplied,
  };
};

export default transformValues;
