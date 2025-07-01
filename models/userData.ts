import { faker } from '@faker-js/faker'

export type UserData = { 
      firstName?:string, 
      lastName:string,
      email:string, 
      password:string,
      gender?:string,
      dateOfBirth?:string,
      phoneNumber?:string,
      address?:string | undefined,
      linkedInURL?:string,
      gitHubURL?:string | undefined,
      validationMessage?:string
  
    }

  export const users: UserData[] = [
  { 
    lastName: faker.person.lastName(),
    email:`${faker.person.firstName().replace(' ', '')}${faker.number.int(1000)}@test.com`,
    password: generatePassword(),
    gender:generateRandomGender(),
    dateOfBirth: generateDOB(),
    phoneNumber:generatePhoneNumber(),
    address:generateAddressWithFaker(),
    linkedInURL:generateFakeLinkedInUrl(),
    gitHubURL:generateFakeLinkedInProfile(),
    validationMessage:'First name must be filled out'
  },

  { firstName: faker.person.firstName(), 
    lastName: faker.person.lastName(),
    email:`${faker.person.firstName().replace(' ', '')}${faker.number.int(1000)}@test.com`,
    password: generatePassword(),
    gender:generateRandomGender(),
    dateOfBirth: generateDOB(),
    phoneNumber:generatePhoneNumber(),
    address:generateAddressWithFaker(),
    linkedInURL:generateFakeLinkedInUrl(),
    gitHubURL:generateFakeLinkedInProfile()    
  },
  
]


  function generateDOB(): string {
  const start = new Date(1950, 0, 1); // 01 Jan 1950
  const end = new Date(2005, 11, 31); // 31 Dec 2005
  const dob = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  const mm = String(dob.getMonth() + 1).padStart(2, '0');
  const dd = String(dob.getDate()).padStart(2, '0');
  const yyyy = dob.getFullYear();

  return `${mm} ${dd} ${yyyy}`
}

function generateFakeLinkedInUrl(): string {
  const fullNameSlug = faker.person.fullName()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');        

  const randomId = faker.string.alphanumeric(8).toLowerCase()

  return `https://www.linkedin.com/in/${fullNameSlug}-${randomId}`
}

function generateRandomGender(): 'Male' | 'Female' | 'Prefer not to say' {
  const genders = ['Male', 'Female', 'Prefer not to say'] as const;
  return genders[Math.floor(Math.random() * genders.length)];
}

function generatePhoneNumber(): string {
  const operatorCode = Math.floor(900 + Math.random() * 100) 
  const number = Math.floor(1000000 + Math.random() * 9000000)
  return `${operatorCode}${number}`
}

function generateAddressWithFaker(): string {
  const city = faker.location.city();
  const street = faker.location.street();

  return `${city}, ${street}`;
}

function generatePassword(length: number = 12): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

 function generateFakeLinkedInProfile(): string {
  const fullName = faker.person.fullName();
  const slug = generateLinkedInSlug(fullName);
  return  `https://www.linkedin.com/in/${slug}-${faker.string.alphanumeric(8).toLowerCase()}`
 }

 function generateLinkedInSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

