export const ru = {
  mixed: {
    required: 'Обязательное поле',
    notType: ({ type }) => `Должен быть типом ${type}`,
    oneOf: 'Должно быть одно из следующих значений: ${values}',
  },
  string: {
    email: '${path} должен быть действительным адресом электронной почты',
  },
};
