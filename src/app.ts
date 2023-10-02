// import { type } from "os"

// // kiểu union type
// let id: number | string = "30"

// type Status = "success" | "error" | "loading"

// // Kiểu intersection type
// type User = "user";
// type Admin = "admin";

// type Role = User & Admin

// const role: Role = "admin" as Role
// console.log(role);

// // Kiểu enum type
// // enum number => truy xuất đc 2 chiều
// enum StatusOrder {
//     Cancel = 2,
//     Success = "error",
//     Pending = "loading"
// }
// console.log("status", StatusOrder.Success);

// enum Roles {
//     ADMIN,
//     USER,
//     EMPLOYEE,
//     MANAGER
// }

// enum HTTP {
//     GET = "GET",
//     PUT = "PUT",
//     PATCH = "PATCH",
//     DELETE = "DELETE",
// }


// Bai tập

// DO NOT EDIT users
type Users = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    age: number;
    salary: number;
} [];

const users: Users = [
    {
      id: 1,
      first_name: "Eamon",
      last_name: "Harhoff",
      email: "eharhoff0@imageshack.us",
      gender: "Male",
      age: 76,
      salary: 18888,
    },
    {
      id: 2,
      first_name: "Laney",
      last_name: "Whittam",
      email: "lwhittam1@issuu.com",
      gender: "Female",
      age: 42,
      salary: 15018,
    },
    {
      id: 3,
      first_name: "Lynett",
      last_name: "Twinberrow",
      email: "ltwinberrow2@gov.uk",
      gender: "Female",
      age: 99,
      salary: 13343,
    },
    {
      id: 4,
      first_name: "Madella",
      last_name: "Kliesl",
      email: "mkliesl3@ft.com",
      gender: "Female",
      age: 56,
      salary: 5248,
    },
    {
      id: 5,
      first_name: "Simona",
      last_name: "Knee",
      email: "sknee4@sciencedaily.com",
      gender: "Female",
      age: 61,
      salary: 14376,
    },
    {
      id: 6,
      first_name: "Cord",
      last_name: "McMurthy",
      email: "cmcmurthy5@wordpress.org",
      gender: "Male",
      age: 86,
      salary: 9514,
    },
    {
      id: 7,
      first_name: "Obed",
      last_name: "Beaven",
      email: "obeaven6@msn.com",
      gender: "Male",
      age: 91,
      salary: 18463,
    },
    {
      id: 8,
      first_name: "Elayne",
      last_name: "Smeuin",
      email: "esmeuin7@wsj.com",
      gender: "Female",
      age: 96,
      salary: 19907,
    },
    {
      id: 9,
      first_name: "Robin",
      last_name: "Picford",
      email: "rpicford8@typepad.com",
      gender: "Female",
      age: 55,
      salary: 14975,
    },
    {
      id: 10,
      first_name: "Patsy",
      last_name: "Ochterlonie",
      email: "pochterlonie9@latimes.com",
      gender: "Female",
      age: 93,
      salary: 9716,
    },
    {
      id: 11,
      first_name: "Madelina",
      last_name: "Henrion",
      email: "mhenriona@alibaba.com",
      gender: "Female",
      age: 81,
      salary: 12932,
    },
    {
      id: 12,
      first_name: "Godard",
      last_name: "Sciacovelli",
      email: "gsciacovellib@opera.com",
      gender: "Male",
      age: 90,
      salary: 16655,
    },
    {
      id: 13,
      first_name: "Padget",
      last_name: "Gore",
      email: "pgorec@washington.edu",
      gender: "Male",
      age: 34,
      salary: 8029,
    },
    {
      id: 14,
      first_name: "Birdie",
      last_name: "Davidovich",
      email: "bdavidovichd@tamu.edu",
      gender: "Female",
      age: 49,
      salary: 17407,
    },
    {
      id: 15,
      first_name: "Lisbeth",
      last_name: "Pride",
      email: "lpridee@epa.gov",
      gender: "Female",
      age: 94,
      salary: 14993,
    },
    {
      id: 16,
      first_name: "Saundra",
      last_name: "Ousbie",
      email: "sousbief@acquirethisname.com",
      gender: "Male",
      age: 44,
      salary: 15423,
    },
    {
      id: 17,
      first_name: "Allayne",
      last_name: "Cluatt",
      email: "acluattg@nifty.com",
      gender: "Male",
      age: 78,
      salary: 13206,
    },
    {
      id: 18,
      first_name: "Burke",
      last_name: "Christoforou",
      email: "bchristoforouh@un.org",
      gender: "Male",
      age: 84,
      salary: 13712,
    },
    {
      id: 19,
      first_name: "Maryanne",
      last_name: "Stoakes",
      email: "mstoakesi@rambler.ru",
      gender: "Female",
      age: 63,
      salary: 18235,
    },
    {
      id: 20,
      first_name: "Larisa",
      last_name: "Bartelet",
      email: "lbarteletj@studiopress.com",
      gender: "Female",
      age: 65,
      salary: 6594,
    },
    {
      id: 21,
      first_name: "Jamison",
      last_name: "Edgworth",
      email: "jedgworthk@apache.org",
      gender: "Male",
      age: 51,
      salary: 6476,
    },
    {
      id: 22,
      first_name: "Dare",
      last_name: "Etherton",
      email: "dethertonl@ed.gov",
      gender: "Male",
      age: 26,
      salary: 11718,
    },
    {
      id: 23,
      first_name: "Ernestus",
      last_name: "Luttgert",
      email: "eluttgertm@tumblr.com",
      gender: "Male",
      age: 98,
      salary: 6890,
    },
    {
      id: 24,
      first_name: "Cherye",
      last_name: "Cancellieri",
      email: "ccancellierin@bigcartel.com",
      gender: "Female",
      age: 56,
      salary: 19434,
    },
    {
      id: 25,
      first_name: "Silvie",
      last_name: "Cancott",
      email: "scancotto@github.com",
      gender: "Female",
      age: 100,
      salary: 15717,
    },
    {
      id: 26,
      first_name: "Martainn",
      last_name: "Groundwater",
      email: "mgroundwaterp@cnn.com",
      gender: "Male",
      age: 89,
      salary: 16985,
    },
    {
      id: 27,
      first_name: "Ernaline",
      last_name: "Collister",
      email: "ecollisterq@umich.edu",
      gender: "Female",
      age: 37,
      salary: 12353,
    },
    {
      id: 28,
      first_name: "Brandice",
      last_name: "Parlot",
      email: "bparlotr@gmpg.org",
      gender: "Female",
      age: 63,
      salary: 19860,
    },
    {
      id: 29,
      first_name: "Celestyn",
      last_name: "Dunnion",
      email: "cdunnions@cyberchimps.com",
      gender: "Female",
      age: 54,
      salary: 13108,
    },
    {
      id: 30,
      first_name: "Hayley",
      last_name: "Rea",
      email: "hreat@fotki.com",
      gender: "Female",
      age: 56,
      salary: 15717,
    },
    {
      id: 31,
      first_name: "Cairistiona",
      last_name: "Bengtson",
      email: "cbengtsonu@51.la",
      gender: "Female",
      age: 98,
      salary: 18685,
    },
    {
      id: 32,
      first_name: "Bonny",
      last_name: "Point",
      email: "bpointv@youtu.be",
      gender: "Female",
      age: 72,
      salary: 11893,
    },
    {
      id: 33,
      first_name: "Sanders",
      last_name: "Geelan",
      email: "sgeelanw@sciencedirect.com",
      gender: "Male",
      age: 57,
      salary: 13336,
    },
    {
      id: 34,
      first_name: "Berni",
      last_name: "Bagwell",
      email: "bbagwellx@skype.com",
      gender: "Female",
      age: 77,
      salary: 6671,
    },
    {
      id: 35,
      first_name: "Adrien",
      last_name: "Dibdin",
      email: "adibdiny@list-manage.com",
      gender: "Male",
      age: 70,
      salary: 5940,
    },
    {
      id: 36,
      first_name: "Nata",
      last_name: "Kalinke",
      email: "nkalinkez@1688.com",
      gender: "Female",
      age: 78,
      salary: 12897,
    },
    {
      id: 37,
      first_name: "Roosevelt",
      last_name: "Eat",
      email: "reat10@yelp.com",
      gender: "Male",
      age: 96,
      salary: 6055,
    },
    {
      id: 38,
      first_name: "Noach",
      last_name: "Fannin",
      email: "nfannin11@ycombinator.com",
      gender: "Male",
      age: 22,
      salary: 7610,
    },
    {
      id: 39,
      first_name: "Ram",
      last_name: "Pagelsen",
      email: "rpagelsen12@utexas.edu",
      gender: "Male",
      age: 31,
      salary: 18930,
    },
    {
      id: 40,
      first_name: "Thaine",
      last_name: "Jacobi",
      email: "tjacobi13@technorati.com",
      gender: "Male",
      age: 64,
      salary: 11730,
    },
    {
      id: 41,
      first_name: "Fonz",
      last_name: "Balasini",
      email: "fbalasini14@thetimes.co.uk",
      gender: "Male",
      age: 93,
      salary: 15769,
    },
    {
      id: 42,
      first_name: "Opaline",
      last_name: "Donne",
      email: "odonne15@adobe.com",
      gender: "Female",
      age: 37,
      salary: 8278,
    },
    {
      id: 43,
      first_name: "Persis",
      last_name: "Luciano",
      email: "pluciano16@narod.ru",
      gender: "Female",
      age: 25,
      salary: 8355,
    },
    {
      id: 44,
      first_name: "Farlee",
      last_name: "Ricardou",
      email: "fricardou17@eepurl.com",
      gender: "Male",
      age: 80,
      salary: 19827,
    },
    {
      id: 45,
      first_name: "Russ",
      last_name: "Curson",
      email: "rcurson18@harvard.edu",
      gender: "Male",
      age: 77,
      salary: 8533,
    },
    {
      id: 46,
      first_name: "Denis",
      last_name: "Kliement",
      email: "dkliement19@ovh.net",
      gender: "Male",
      age: 81,
      salary: 8962,
    },
    {
      id: 47,
      first_name: "Dulcinea",
      last_name: "Whittet",
      email: "dwhittet1a@bravesites.com",
      gender: "Female",
      age: 87,
      salary: 15768,
    },
    {
      id: 48,
      first_name: "Keslie",
      last_name: "Linner",
      email: "klinner1b@phoca.cz",
      gender: "Female",
      age: 83,
      salary: 15261,
    },
    {
      id: 49,
      first_name: "Isobel",
      last_name: "Cheek",
      email: "icheek1c@nasa.gov",
      gender: "Female",
      age: 83,
      salary: 12744,
    },
    {
      id: 50,
      first_name: "Randy",
      last_name: "Donke",
      email: "rdonke1d@bigcartel.com",
      gender: "Female",
      age: 40,
      salary: 10283,
    }
  ];
  
  // YOUR CODE HERE
// const Bai1 = (users: Users): string[] => {
//     const names: string[] = [];

//     users.forEach((user) => {
//         const fullName = `${user.first_name} ${user.last_name}`;
//         names.push(fullName);
//     });

//   return names;
// };
// console.log(Bai1(users));


// const Bai2 = (users: Users): Users => {
//     const userFilter = users.filter((user) => user.gender === 'Male' && user.age < 40);
//     return userFilter
// }

// console.log(Bai2(users));

// const Bai3 = (users: Users): string[] => {
//     const userMap = users.map((user) => {
//        return `${user.first_name} ${user.last_name}`
//     })
//     return userMap
// }
// console.log(Bai3(users));


// const Bai4 = (users: any): Users => {
//     const camelCaseUsers: Users = [];

//     for (const user of users) {
//         const camelCaseUser: any = {};

//         for (const key in user) {
//             if (user.hasOwnProperty(key)) {
//                 const camelCaseKey = key.replace(/_./g, (match) => match.charAt(1).toUpperCase());
//                 camelCaseUser[camelCaseKey] = user[key];
//             }
//         }

//         camelCaseUsers.push(camelCaseUser);
//     }

//     return camelCaseUsers;
// }

// console.log(Bai4(users));



// function Bai5(users: Users): number {
//     if (users.length === 0) {
//         return 0; 
//     }

//     const totalAge = users.reduce((sum, user) => sum + user.age, 0);
//     return totalAge / users.length;
// }

// console.log(Bai5(users));


// function Bai6_1 (users: User): string[] {
//     return users.reduce((fullNames, user) => {
//         const fullName = `${user.first_name} ${user.last_name}`;
//         fullNames.push(fullName);
//         return fullNames;
//     }, []);
// }
// console.log(Bai6_1(users));

  

// function Bai6_2(users: User): string {
//     return users.reduce((filteredUsers, user) => {
//         if (user.gender === 'Male' && user.age < 40) {
//             return [...filteredUsers, user];
//         }
//         return filteredUsers;
//     }, []);
// }
// console.log(Bai6_2(users));


// function Bai7(users: User[]): User[] {
//     return [...users].sort((a, b) => a.first_name.localeCompare(b.first_name));
// }

// console.log(Bai7(users));


// function Bai8<T, U> (arr: T[], callback: (value: T, index: number, array: T[]) => U): U[] {
//     const result: U[] = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i, arr));
//     }
//     return result;
// }

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = Bai8(numbers, (number) => number * 2);
// console.log(doubledNumbers);











