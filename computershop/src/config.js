import dotenv from 'dotenv';

dotenv.config();
console.log(process.env.NODE_ENV);

const config = {
  api_host: process.env.API_HOST,
  site_title: process.env.SITE_TITLE,
  global_ongkir: process.env.GLOBAL_ONGKIR,
  owner: process.env.OWNER,
  contact: process.env.CONTACT,
  billing: {
    account_no: process.env.BILLING_NO,
    bank_name: process.env.BILLING_BANK
  }
}

export {
  config
}