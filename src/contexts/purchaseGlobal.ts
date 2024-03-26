// purchaseIDGlobal.js
let purchaseID = '';

export const setPurchaseID = (id: string) => {
  purchaseID = id;
};

export const getPurchaseID = () => {
  return purchaseID;
};
