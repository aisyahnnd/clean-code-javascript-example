// Bad Code
getdata()
  .then((data) => {
    functionThatMightThrow(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Good Code
getdata()
  .then((data) => {
    functionThatMightThrow(data);
  })
  .catch((error) => {
    // Satu opsi (lebih berisik daripada console.log):
    console.error(error);
    // Opsi lain:
    notifyUserOfError(error);
    // Opsi lain:
    reportErrorToService(error);
    // Atau lakukan ketiganya!
  });
