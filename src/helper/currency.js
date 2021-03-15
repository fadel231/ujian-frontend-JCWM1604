export const currencyFormatter = (numb) => {
  var formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  numb = numb * 10 ** 1;
  return formatter.format(numb);
};
