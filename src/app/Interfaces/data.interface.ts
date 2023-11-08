export interface Data {
    "adId": number;
    "address": string;
    "price": number;
    "image": string;
    "currency": string;
    "uploadDate": string;
    "description": string;
    "status": "checked" | "unchecked";
    "contact": {
      "email": string,
      "parsedPhoneNumbers": Array<string>;
    }
}
