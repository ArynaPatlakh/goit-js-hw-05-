const getTotalBalanceByGender = (users, gender) => {
  //   const filterGender = users.filter((user) => user.gender === gender);
  //   console.log(filterGender);
  //   const filterBalance = filterGender.map((balance) => balance.balance);
  //   console.log(filterBalance);
  //   const allBalance = filterBalance.reduce((startBalance, firstBalance) => {
  //     return startBalance += firstBalance;
  //   }, 0);
  //     console.log(allBalance);
  return users
    .filter((user) => user.gender === gender)
    .map((balance) => balance.balance)
    .reduce((startBalance, firstBalance) => {
      return (startBalance += firstBalance);
    }, 0);
};

const clients = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
