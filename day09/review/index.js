const data = [
  {
    department: "Sales",
    company: "Demimbu",
    gender: "Male",
    language: "German",
    first_name: "Durward",
    ssn: "671-58-2800",
  },
  {
    department: "Accounting",
    company: "Gabcube",
    gender: "Male",
    language: "Fijian",
    first_name: "Howie",
    ssn: "169-51-6352",
  },
  {
    department: "Services",
    company: "BlogXS",
    gender: "Female",
    language: "Quechua",
    first_name: "Aliza",
    ssn: "291-89-0419",
  },
  {
    department: "Marketing",
    company: "Roombo",
    gender: "Female",
    language: "Yiddish",
    first_name: "Penni",
    ssn: "580-30-1766",
  },
  {
    department: "Support",
    company: "Quimm",
    gender: "Male",
    language: "Polish",
    first_name: "Taite",
    ssn: "230-32-0921",
  },
  {
    department: "Engineering",
    company: "Photobean",
    gender: "Male",
    language: "Amharic",
    first_name: "Mitchael",
    ssn: "291-20-2277",
  },
  {
    department: "Marketing",
    company: "Skipstorm",
    gender: "Female",
    language: "Punjabi",
    first_name: "Zondra",
    ssn: "777-55-7349",
  },
  {
    department: "Engineering",
    company: "Twinte",
    gender: "Polygender",
    language: "New Zealand Sign Language",
    first_name: "Leonie",
    ssn: "721-47-9379",
  },
  {
    department: "Training",
    company: "Rhybox",
    gender: "Female",
    language: "Czech",
    first_name: "Gabriel",
    ssn: "137-55-8576",
  },
  {
    department: "Sales",
    company: "Yoveo",
    gender: "Female",
    language: "Gagauz",
    first_name: "Truda",
    ssn: "301-10-2466",
  },
  {
    department: "Engineering",
    company: "Gabspot",
    gender: "Male",
    language: "Lao",
    first_name: "Corbet",
    ssn: "736-19-9685",
  },
  {
    department: "Sales",
    company: "Feedbug",
    gender: "Male",
    language: "Hungarian",
    first_name: "Oran",
    ssn: "374-65-1295",
  },
  {
    department: "Support",
    company: "Kimia",
    gender: "Male",
    language: "Telugu",
    first_name: "Rolf",
    ssn: "206-88-7771",
  },
  {
    department: "Business Development",
    company: "Skilith",
    gender: "Female",
    language: "Norwegian",
    first_name: "Livvie",
    ssn: "319-44-0877",
  },
  {
    department: "Sales",
    company: "Fivespan",
    gender: "Female",
    language: "Mongolian",
    first_name: "George",
    ssn: "343-14-9838",
  },
  {
    department: "Product Management",
    company: "Browseblab",
    gender: "Male",
    language: "Indonesian",
    first_name: "Hersch",
    ssn: "798-51-8493",
  },
  {
    department: "Sales",
    company: "Wikido",
    gender: "Male",
    language: "Māori",
    first_name: "Lucien",
    ssn: "202-96-8986",
  },
  {
    department: "Support",
    company: "Kwimbee",
    gender: "Female",
    language: "French",
    first_name: "Cele",
    ssn: "418-24-6428",
  },
  {
    department: "Research and Development",
    company: "Aimbo",
    gender: "Female",
    language: "Italian",
    first_name: "Gabie",
    ssn: "840-06-8626",
  },
  {
    department: "Marketing",
    company: "Zoonoodle",
    gender: "Female",
    language: "Bosnian",
    first_name: "Issy",
    ssn: "420-83-8849",
  },
  {
    department: "Human Resources",
    company: "Twitterwire",
    gender: "Female",
    language: "Italian",
    first_name: "Linette",
    ssn: "866-51-8747",
  },
  {
    department: "Marketing",
    company: "Meevee",
    gender: "Male",
    language: "Korean",
    first_name: "Cirillo",
    ssn: "616-40-0047",
  },
  {
    department: "Support",
    company: "Trilia",
    gender: "Female",
    language: "Polish",
    first_name: "Fanni",
    ssn: "545-86-4222",
  },
  {
    department: "Sales",
    company: "Fivebridge",
    gender: "Male",
    language: "Bosnian",
    first_name: "Royall",
    ssn: "847-79-3539",
  },
  {
    department: "Research and Development",
    company: "Tanoodle",
    gender: "Female",
    language: "Burmese",
    first_name: "Moreen",
    ssn: "655-47-1410",
  },
  {
    department: "Services",
    company: "Fliptune",
    gender: "Polygender",
    language: "Dzongkha",
    first_name: "Kienan",
    ssn: "683-77-7676",
  },
  {
    department: "Sales",
    company: "Mudo",
    gender: "Female",
    language: "Czech",
    first_name: "Evonne",
    ssn: "731-10-0188",
  },
  {
    department: "Accounting",
    company: "Youtags",
    gender: "Male",
    language: "Lithuanian",
    first_name: "Isidro",
    ssn: "458-61-7877",
  },
  {
    department: "Services",
    company: "Quimba",
    gender: "Male",
    language: "Swati",
    first_name: "Hillyer",
    ssn: "544-34-5182",
  },
  {
    department: "Research and Development",
    company: "Jetwire",
    gender: "Female",
    language: "Tetum",
    first_name: "Barbra",
    ssn: "636-97-9863",
  },
  {
    department: "Product Management",
    company: "Kimia",
    gender: "Female",
    language: "Italian",
    first_name: "Carlota",
    ssn: "374-60-0624",
  },
  {
    department: "Product Management",
    company: "Shuffletag",
    gender: "Male",
    language: "Somali",
    first_name: "Cobby",
    ssn: "542-27-5649",
  },
  {
    department: "Marketing",
    company: "Quamba",
    gender: "Male",
    language: "Marathi",
    first_name: "Fergus",
    ssn: "319-89-4365",
  },
  {
    department: "Accounting",
    company: "Innojam",
    gender: "Male",
    language: "Hiri Motu",
    first_name: "Tedmund",
    ssn: "398-87-1521",
  },
  {
    department: "Services",
    company: "Thoughtstorm",
    gender: "Male",
    language: "Pashto",
    first_name: "Pen",
    ssn: "796-42-9088",
  },
  {
    department: "Legal",
    company: "Demizz",
    gender: "Male",
    language: "Croatian",
    first_name: "Farris",
    ssn: "534-82-6227",
  },
  {
    department: "Services",
    company: "Realfire",
    gender: "Non-binary",
    language: "Yiddish",
    first_name: "Tana",
    ssn: "237-53-9629",
  },
  {
    department: "Training",
    company: "Voonte",
    gender: "Female",
    language: "Korean",
    first_name: "Frederica",
    ssn: "419-40-5670",
  },
  {
    department: "Sales",
    company: "Mybuzz",
    gender: "Female",
    language: "Persian",
    first_name: "Emlynne",
    ssn: "737-35-2190",
  },
  {
    department: "Training",
    company: "Dablist",
    gender: "Bigender",
    language: "Bengali",
    first_name: "Cloris",
    ssn: "748-55-3358",
  },
  {
    department: "Research and Development",
    company: "Eabox",
    gender: "Female",
    language: "Hiri Motu",
    first_name: "Kora",
    ssn: "373-10-0703",
  },
  {
    department: "Legal",
    company: "Yozio",
    gender: "Female",
    language: "Aymara",
    first_name: "Carlee",
    ssn: "229-77-7724",
  },
  {
    department: "Human Resources",
    company: "Jabbersphere",
    gender: "Female",
    language: "Thai",
    first_name: "Jennilee",
    ssn: "871-39-0567",
  },
  {
    department: "Services",
    company: "Tagpad",
    gender: "Male",
    language: "Moldovan",
    first_name: "Sandor",
    ssn: "245-67-2444",
  },
  {
    department: "Engineering",
    company: "Rhyzio",
    gender: "Male",
    language: "Estonian",
    first_name: "Stanley",
    ssn: "102-88-8801",
  },
  {
    department: "Support",
    company: "Gabspot",
    gender: "Female",
    language: "Tamil",
    first_name: "Bunni",
    ssn: "772-86-5356",
  },
  {
    department: "Business Development",
    company: "Quatz",
    gender: "Male",
    language: "Quechua",
    first_name: "Neel",
    ssn: "113-06-1888",
  },
  {
    department: "Support",
    company: "Rhynyx",
    gender: "Female",
    language: "Albanian",
    first_name: "Joyce",
    ssn: "481-74-8124",
  },
  {
    department: "Accounting",
    company: "Eamia",
    gender: "Male",
    language: "Latvian",
    first_name: "Sollie",
    ssn: "131-12-3137",
  },
  {
    department: "Support",
    company: "Gabtype",
    gender: "Non-binary",
    language: "Assamese",
    first_name: "Galen",
    ssn: "163-17-9552",
  },
  {
    department: "Human Resources",
    company: "Skinder",
    gender: "Genderqueer",
    language: "Dhivehi",
    first_name: "Tabatha",
    ssn: "393-69-9990",
  },
  {
    department: "Research and Development",
    company: "Thoughtbridge",
    gender: "Female",
    language: "Danish",
    first_name: "Eydie",
    ssn: "333-20-9436",
  },
  {
    department: "Human Resources",
    company: "Flashdog",
    gender: "Genderfluid",
    language: "Bosnian",
    first_name: "Ophelia",
    ssn: "113-38-4850",
  },
  {
    department: "Accounting",
    company: "Gabcube",
    gender: "Female",
    language: "Punjabi",
    first_name: "Hadria",
    ssn: "296-86-0629",
  },
  {
    department: "Support",
    company: "Topicblab",
    gender: "Male",
    language: "Portuguese",
    first_name: "Parker",
    ssn: "438-74-4808",
  },
  {
    department: "Sales",
    company: "Wikivu",
    gender: "Female",
    language: "Gagauz",
    first_name: "Tansy",
    ssn: "778-03-5575",
  },
  {
    department: "Training",
    company: "Devify",
    gender: "Male",
    language: "Hiri Motu",
    first_name: "Elmore",
    ssn: "762-32-0888",
  },
  {
    department: "Human Resources",
    company: "Fivespan",
    gender: "Female",
    language: "Marathi",
    first_name: "Lizzie",
    ssn: "226-17-3775",
  },
  {
    department: "Human Resources",
    company: "Thoughtstorm",
    gender: "Agender",
    language: "Tetum",
    first_name: "Clevie",
    ssn: "511-76-0799",
  },
  {
    department: "Human Resources",
    company: "Quaxo",
    gender: "Female",
    language: "Somali",
    first_name: "Evelina",
    ssn: "221-68-5419",
  },
  {
    department: "Product Management",
    company: "Trunyx",
    gender: "Female",
    language: "Korean",
    first_name: "Pier",
    ssn: "890-30-5721",
  },
  {
    department: "Services",
    company: "Lazz",
    gender: "Male",
    language: "French",
    first_name: "Sherwin",
    ssn: "369-28-1662",
  },
  {
    department: "Engineering",
    company: "Agimba",
    gender: "Male",
    language: "Telugu",
    first_name: "Gerhardt",
    ssn: "832-43-0658",
  },
  {
    department: "Business Development",
    company: "Divavu",
    gender: "Female",
    language: "Assamese",
    first_name: "Eolande",
    ssn: "326-48-4650",
  },
  {
    department: "Training",
    company: "Edgeclub",
    gender: "Male",
    language: "Azeri",
    first_name: "Christoper",
    ssn: "387-84-7781",
  },
  {
    department: "Human Resources",
    company: "Oyondu",
    gender: "Bigender",
    language: "Assamese",
    first_name: "Brnaby",
    ssn: "766-76-3203",
  },
  {
    department: "Marketing",
    company: "Devcast",
    gender: "Male",
    language: "Irish Gaelic",
    first_name: "Richmond",
    ssn: "482-99-8187",
  },
  {
    department: "Accounting",
    company: "Agimba",
    gender: "Female",
    language: "Lao",
    first_name: "Sorcha",
    ssn: "827-19-0980",
  },
  {
    department: "Support",
    company: "Jamia",
    gender: "Male",
    language: "Irish Gaelic",
    first_name: "Brice",
    ssn: "629-72-1771",
  },
  {
    department: "Services",
    company: "Livetube",
    gender: "Male",
    language: "Tamil",
    first_name: "Roy",
    ssn: "141-88-0204",
  },
  {
    department: "Research and Development",
    company: "Flipopia",
    gender: "Female",
    language: "Tsonga",
    first_name: "Aarika",
    ssn: "228-52-0030",
  },
  {
    department: "Human Resources",
    company: "Photolist",
    gender: "Female",
    language: "Tok Pisin",
    first_name: "Eloise",
    ssn: "494-59-8608",
  },
  {
    department: "Research and Development",
    company: "Skyba",
    gender: "Male",
    language: "Gagauz",
    first_name: "Clemente",
    ssn: "255-42-3005",
  },
  {
    department: "Research and Development",
    company: "Meevee",
    gender: "Female",
    language: "Croatian",
    first_name: "Isidora",
    ssn: "587-30-3398",
  },
  {
    department: "Engineering",
    company: "Topicware",
    gender: "Male",
    language: "Indonesian",
    first_name: "Meredith",
    ssn: "684-76-8566",
  },
  {
    department: "Business Development",
    company: "Snaptags",
    gender: "Female",
    language: "Greek",
    first_name: "Gerri",
    ssn: "618-65-2556",
  },
  {
    department: "Accounting",
    company: "Jaxworks",
    gender: "Female",
    language: "Gujarati",
    first_name: "Daphene",
    ssn: "556-64-3627",
  },
  {
    department: "Sales",
    company: "Blogspan",
    gender: "Male",
    language: "Quechua",
    first_name: "Lev",
    ssn: "715-96-8881",
  },
  {
    department: "Business Development",
    company: "Vipe",
    gender: "Female",
    language: "Czech",
    first_name: "Nerita",
    ssn: "785-86-5071",
  },
  {
    department: "Support",
    company: "Zooveo",
    gender: "Male",
    language: "Arabic",
    first_name: "Iggy",
    ssn: "427-96-4516",
  },
  {
    department: "Engineering",
    company: "Quimm",
    gender: "Male",
    language: "Czech",
    first_name: "Mychal",
    ssn: "397-24-2314",
  },
  {
    department: "Research and Development",
    company: "Skimia",
    gender: "Male",
    language: "Finnish",
    first_name: "Regan",
    ssn: "419-74-8657",
  },
  {
    department: "Engineering",
    company: "Realcube",
    gender: "Male",
    language: "Albanian",
    first_name: "Antony",
    ssn: "197-82-3395",
  },
  {
    department: "Training",
    company: "Skyndu",
    gender: "Non-binary",
    language: "Hungarian",
    first_name: "Nariko",
    ssn: "768-86-5122",
  },
  {
    department: "Training",
    company: "Buzzshare",
    gender: "Female",
    language: "French",
    first_name: "Janifer",
    ssn: "604-99-6703",
  },
  {
    department: "Services",
    company: "Skyvu",
    gender: "Female",
    language: "Estonian",
    first_name: "Maitilde",
    ssn: "307-01-1401",
  },
  {
    department: "Business Development",
    company: "Jayo",
    gender: "Female",
    language: "Tswana",
    first_name: "Shannah",
    ssn: "194-12-2914",
  },
  {
    department: "Business Development",
    company: "Skiba",
    gender: "Female",
    language: "Dzongkha",
    first_name: "Hana",
    ssn: "680-92-3647",
  },
  {
    department: "Sales",
    company: "Einti",
    gender: "Female",
    language: "Māori",
    first_name: "Sabine",
    ssn: "474-97-7906",
  },
  {
    department: "Support",
    company: "Meezzy",
    gender: "Female",
    language: "Estonian",
    first_name: "Faina",
    ssn: "879-72-9985",
  },
  {
    department: "Services",
    company: "Divanoodle",
    gender: "Genderfluid",
    language: "Zulu",
    first_name: "Hally",
    ssn: "589-91-8844",
  },
  {
    department: "Research and Development",
    company: "Layo",
    gender: "Female",
    language: "Finnish",
    first_name: "Gilli",
    ssn: "141-84-2811",
  },
  {
    department: "Research and Development",
    company: "Babblestorm",
    gender: "Male",
    language: "Indonesian",
    first_name: "Cameron",
    ssn: "392-97-7798",
  },
  {
    department: "Human Resources",
    company: "Fanoodle",
    gender: "Female",
    language: "Fijian",
    first_name: "Elset",
    ssn: "533-45-8929",
  },
  {
    department: "Product Management",
    company: "Vidoo",
    gender: "Male",
    language: "Aymara",
    first_name: "Yancy",
    ssn: "517-07-0768",
  },
  {
    department: "Marketing",
    company: "Skyble",
    gender: "Female",
    language: "Bislama",
    first_name: "Sharla",
    ssn: "775-57-9378",
  },
  {
    department: "Support",
    company: "Layo",
    gender: "Male",
    language: "Filipino",
    first_name: "Bald",
    ssn: "624-69-3705",
  },
  {
    department: "Human Resources",
    company: "Buzzdog",
    gender: "Female",
    language: "Hebrew",
    first_name: "Rosie",
    ssn: "626-59-4613",
  },
  {
    department: "Product Management",
    company: "Browsetype",
    gender: "Female",
    language: "Icelandic",
    first_name: "Rosaline",
    ssn: "169-12-7848",
  },
  {
    department: "Product Management",
    company: "Vimbo",
    gender: "Bigender",
    language: "Dhivehi",
    first_name: "Paulina",
    ssn: "692-38-6536",
  },
  {
    department: "Product Management",
    company: "Oozz",
    gender: "Male",
    language: "Arabic",
    first_name: "Wendell",
    ssn: "788-38-0639",
  },
  {
    department: "Services",
    company: "Shufflebeat",
    gender: "Male",
    language: "German",
    first_name: "Oliviero",
    ssn: "170-93-9851",
  },
  {
    department: "Support",
    company: "Shuffletag",
    gender: "Female",
    language: "Khmer",
    first_name: "Genia",
    ssn: "704-33-0389",
  },
  {
    department: "Human Resources",
    company: "Zooveo",
    gender: "Female",
    language: "Italian",
    first_name: "Gavrielle",
    ssn: "105-55-9584",
  },
  {
    department: "Business Development",
    company: "Edgeclub",
    gender: "Male",
    language: "Italian",
    first_name: "Henrik",
    ssn: "181-40-1078",
  },
  {
    department: "Accounting",
    company: "LiveZ",
    gender: "Male",
    language: "Macedonian",
    first_name: "Abram",
    ssn: "519-33-5983",
  },
  {
    department: "Marketing",
    company: "Gabtype",
    gender: "Female",
    language: "Arabic",
    first_name: "Nadiya",
    ssn: "888-96-8661",
  },
  {
    department: "Support",
    company: "Midel",
    gender: "Female",
    language: "Icelandic",
    first_name: "Marjory",
    ssn: "197-70-6721",
  },
  {
    department: "Research and Development",
    company: "Twitterbeat",
    gender: "Male",
    language: "Kurdish",
    first_name: "Wilbur",
    ssn: "528-64-9686",
  },
  {
    department: "Services",
    company: "Miboo",
    gender: "Male",
    language: "Māori",
    first_name: "Willem",
    ssn: "504-06-2184",
  },
  {
    department: "Training",
    company: "Youopia",
    gender: "Female",
    language: "Georgian",
    first_name: "Quentin",
    ssn: "870-83-6946",
  },
  {
    department: "Marketing",
    company: "Janyx",
    gender: "Male",
    language: "Tswana",
    first_name: "Linoel",
    ssn: "893-40-8814",
  },
  {
    department: "Services",
    company: "Dynabox",
    gender: "Male",
    language: "Thai",
    first_name: "Witty",
    ssn: "796-49-4849",
  },
  {
    department: "Human Resources",
    company: "Photobug",
    gender: "Female",
    language: "Thai",
    first_name: "Celisse",
    ssn: "205-25-6199",
  },
  {
    department: "Services",
    company: "Skyba",
    gender: "Female",
    language: "Azeri",
    first_name: "Dasie",
    ssn: "647-04-5129",
  },
  {
    department: "Marketing",
    company: "Reallinks",
    gender: "Female",
    language: "Bislama",
    first_name: "Coralie",
    ssn: "558-13-1020",
  },
  {
    department: "Product Management",
    company: "Shufflebeat",
    gender: "Female",
    language: "French",
    first_name: "Minetta",
    ssn: "792-01-1261",
  },
  {
    department: "Accounting",
    company: "Wordware",
    gender: "Female",
    language: "Irish Gaelic",
    first_name: "Kristan",
    ssn: "668-29-8368",
  },
  {
    department: "Training",
    company: "Riffwire",
    gender: "Male",
    language: "Spanish",
    first_name: "Saunder",
    ssn: "488-47-1421",
  },
  {
    department: "Research and Development",
    company: "Quatz",
    gender: "Male",
    language: "Maltese",
    first_name: "Jarrid",
    ssn: "291-29-7260",
  },
  {
    department: "Accounting",
    company: "Browsecat",
    gender: "Male",
    language: "Hungarian",
    first_name: "Tibold",
    ssn: "835-74-7456",
  },
  {
    department: "Business Development",
    company: "Devcast",
    gender: "Female",
    language: "Kurdish",
    first_name: "Vivia",
    ssn: "451-66-0438",
  },
  {
    department: "Training",
    company: "Topiczoom",
    gender: "Female",
    language: "English",
    first_name: "Blisse",
    ssn: "331-36-6869",
  },
  {
    department: "Training",
    company: "Aivee",
    gender: "Male",
    language: "Nepali",
    first_name: "Thatch",
    ssn: "391-57-3299",
  },
  {
    department: "Product Management",
    company: "Skyba",
    gender: "Male",
    language: "Latvian",
    first_name: "Ambrosius",
    ssn: "730-50-7973",
  },
  {
    department: "Human Resources",
    company: "Fatz",
    gender: "Agender",
    language: "Kyrgyz",
    first_name: "Dore",
    ssn: "834-26-8340",
  },
  {
    department: "Training",
    company: "Geba",
    gender: "Female",
    language: "Azeri",
    first_name: "Rebecca",
    ssn: "580-47-5177",
  },
  {
    department: "Human Resources",
    company: "Edgepulse",
    gender: "Female",
    language: "Tswana",
    first_name: "Juline",
    ssn: "827-43-5649",
  },
  {
    department: "Engineering",
    company: "Gabspot",
    gender: "Female",
    language: "West Frisian",
    first_name: "Bernardine",
    ssn: "731-36-6860",
  },
  {
    department: "Business Development",
    company: "Linkbuzz",
    gender: "Male",
    language: "Azeri",
    first_name: "Chrotoem",
    ssn: "621-86-3741",
  },
  {
    department: "Research and Development",
    company: "Divavu",
    gender: "Male",
    language: "Swahili",
    first_name: "Falito",
    ssn: "485-57-4565",
  },
  {
    department: "Engineering",
    company: "Omba",
    gender: "Male",
    language: "Thai",
    first_name: "Shelden",
    ssn: "551-68-8727",
  },
  {
    department: "Business Development",
    company: "Centizu",
    gender: "Genderqueer",
    language: "Icelandic",
    first_name: "Kleon",
    ssn: "762-47-3728",
  },
  {
    department: "Business Development",
    company: "Edgepulse",
    gender: "Male",
    language: "West Frisian",
    first_name: "Udale",
    ssn: "890-52-7092",
  },
  {
    department: "Engineering",
    company: "Kazu",
    gender: "Male",
    language: "Dzongkha",
    first_name: "Filmore",
    ssn: "445-07-3005",
  },
  {
    department: "Services",
    company: "Flashset",
    gender: "Male",
    language: "Tsonga",
    first_name: "Granthem",
    ssn: "151-18-7530",
  },
  {
    department: "Product Management",
    company: "Avaveo",
    gender: "Male",
    language: "Fijian",
    first_name: "Sean",
    ssn: "851-71-6016",
  },
  {
    department: "Human Resources",
    company: "Devcast",
    gender: "Male",
    language: "Korean",
    first_name: "Dexter",
    ssn: "738-95-4060",
  },
  {
    department: "Accounting",
    company: "Aivee",
    gender: "Male",
    language: "Khmer",
    first_name: "Mozes",
    ssn: "179-70-4624",
  },
  {
    department: "Services",
    company: "Feednation",
    gender: "Female",
    language: "Tswana",
    first_name: "Idelle",
    ssn: "257-35-0720",
  },
  {
    department: "Human Resources",
    company: "Digitube",
    gender: "Male",
    language: "Filipino",
    first_name: "Reinaldos",
    ssn: "891-84-6746",
  },
  {
    department: "Marketing",
    company: "Blogtags",
    gender: "Female",
    language: "Oriya",
    first_name: "Christy",
    ssn: "371-90-5757",
  },
  {
    department: "Human Resources",
    company: "Fanoodle",
    gender: "Male",
    language: "Afrikaans",
    first_name: "Henrik",
    ssn: "233-97-9496",
  },
  {
    department: "Marketing",
    company: "Buzzdog",
    gender: "Female",
    language: "Māori",
    first_name: "Celesta",
    ssn: "687-94-6051",
  },
  {
    department: "Product Management",
    company: "InnoZ",
    gender: "Male",
    language: "Georgian",
    first_name: "Tabor",
    ssn: "433-52-3400",
  },
  {
    department: "Training",
    company: "Skilith",
    gender: "Male",
    language: "West Frisian",
    first_name: "Danie",
    ssn: "506-96-6504",
  },
  {
    department: "Services",
    company: "Trupe",
    gender: "Female",
    language: "Gagauz",
    first_name: "Alane",
    ssn: "752-85-4240",
  },
  {
    department: "Human Resources",
    company: "Reallinks",
    gender: "Male",
    language: "Dhivehi",
    first_name: "Esra",
    ssn: "536-81-0618",
  },
  {
    department: "Support",
    company: "Zoomdog",
    gender: "Male",
    language: "Papiamento",
    first_name: "Kaine",
    ssn: "658-99-4777",
  },
  {
    department: "Accounting",
    company: "Digitube",
    gender: "Female",
    language: "Marathi",
    first_name: "Joellyn",
    ssn: "345-60-0999",
  },
  {
    department: "Marketing",
    company: "Yakitri",
    gender: "Male",
    language: "Chinese",
    first_name: "Willard",
    ssn: "448-74-0381",
  },
  {
    department: "Marketing",
    company: "Thoughtstorm",
    gender: "Genderqueer",
    language: "Persian",
    first_name: "Weylin",
    ssn: "196-32-4353",
  },
  {
    department: "Support",
    company: "Twitterworks",
    gender: "Female",
    language: "Dzongkha",
    first_name: "Elmira",
    ssn: "728-01-4047",
  },
  {
    department: "Business Development",
    company: "Latz",
    gender: "Male",
    language: "Belarusian",
    first_name: "Mario",
    ssn: "682-02-7093",
  },
  {
    department: "Training",
    company: "Feedbug",
    gender: "Male",
    language: "Quechua",
    first_name: "Nicolas",
    ssn: "227-43-6379",
  },
  {
    department: "Engineering",
    company: "Nlounge",
    gender: "Male",
    language: "Tetum",
    first_name: "Gustavus",
    ssn: "782-69-7260",
  },
  {
    department: "Engineering",
    company: "Ozu",
    gender: "Female",
    language: "Bulgarian",
    first_name: "Edin",
    ssn: "501-70-8517",
  },
  {
    department: "Marketing",
    company: "Gigashots",
    gender: "Female",
    language: "Indonesian",
    first_name: "Audrie",
    ssn: "783-84-5239",
  },
  {
    department: "Research and Development",
    company: "Edgeify",
    gender: "Female",
    language: "Armenian",
    first_name: "Claudine",
    ssn: "619-71-9703",
  },
  {
    department: "Services",
    company: "Oozz",
    gender: "Female",
    language: "Hiri Motu",
    first_name: "Nicole",
    ssn: "251-77-4252",
  },
  {
    department: "Marketing",
    company: "Wikizz",
    gender: "Female",
    language: "Croatian",
    first_name: "Biddy",
    ssn: "285-51-4465",
  },
  {
    department: "Product Management",
    company: "Thoughtstorm",
    gender: "Male",
    language: "Somali",
    first_name: "Silvester",
    ssn: "374-75-7662",
  },
  {
    department: "Training",
    company: "Omba",
    gender: "Male",
    language: "Maltese",
    first_name: "Cale",
    ssn: "526-45-8903",
  },
  {
    department: "Product Management",
    company: "Blogspan",
    gender: "Female",
    language: "Japanese",
    first_name: "Naoma",
    ssn: "543-76-7662",
  },
  {
    department: "Accounting",
    company: "Meejo",
    gender: "Male",
    language: "Oriya",
    first_name: "Artie",
    ssn: "290-88-2635",
  },
  {
    department: "Business Development",
    company: "Quamba",
    gender: "Female",
    language: "Tswana",
    first_name: "Brandie",
    ssn: "485-93-0202",
  },
  {
    department: "Sales",
    company: "Fliptune",
    gender: "Male",
    language: "Fijian",
    first_name: "Fidel",
    ssn: "465-36-5668",
  },
  {
    department: "Sales",
    company: "Devbug",
    gender: "Genderqueer",
    language: "Moldovan",
    first_name: "Dallon",
    ssn: "614-68-9549",
  },
  {
    department: "Human Resources",
    company: "Rhycero",
    gender: "Female",
    language: "Assamese",
    first_name: "Cathi",
    ssn: "517-08-9321",
  },
  {
    department: "Sales",
    company: "Livetube",
    gender: "Male",
    language: "Georgian",
    first_name: "Piggy",
    ssn: "349-90-8601",
  },
  {
    department: "Marketing",
    company: "Blognation",
    gender: "Female",
    language: "Catalan",
    first_name: "Gaby",
    ssn: "309-14-6046",
  },
  {
    department: "Services",
    company: "Oozz",
    gender: "Non-binary",
    language: "Catalan",
    first_name: "Nial",
    ssn: "536-50-1433",
  },
  {
    department: "Marketing",
    company: "Snaptags",
    gender: "Male",
    language: "Assamese",
    first_name: "Leslie",
    ssn: "393-41-9707",
  },
  {
    department: "Research and Development",
    company: "Flipbug",
    gender: "Female",
    language: "Luxembourgish",
    first_name: "Maurita",
    ssn: "876-90-0423",
  },
  {
    department: "Marketing",
    company: "Linkbridge",
    gender: "Polygender",
    language: "Marathi",
    first_name: "Ivett",
    ssn: "302-94-3734",
  },
  {
    department: "Business Development",
    company: "Yodel",
    gender: "Male",
    language: "Norwegian",
    first_name: "Raffarty",
    ssn: "305-09-9044",
  },
  {
    department: "Support",
    company: "Fiveclub",
    gender: "Male",
    language: "Telugu",
    first_name: "Kevan",
    ssn: "824-26-7076",
  },
  {
    department: "Business Development",
    company: "Divape",
    gender: "Female",
    language: "Malayalam",
    first_name: "Atalanta",
    ssn: "805-75-7581",
  },
  {
    department: "Human Resources",
    company: "Skynoodle",
    gender: "Female",
    language: "Luxembourgish",
    first_name: "Liv",
    ssn: "703-92-8223",
  },
  {
    department: "Sales",
    company: "Jabberstorm",
    gender: "Female",
    language: "Guaraní",
    first_name: "Biddie",
    ssn: "806-06-4548",
  },
  {
    department: "Accounting",
    company: "Mymm",
    gender: "Female",
    language: "Quechua",
    first_name: "Sharlene",
    ssn: "243-17-3890",
  },
  {
    department: "Engineering",
    company: "Eare",
    gender: "Male",
    language: "Chinese",
    first_name: "Brendon",
    ssn: "308-74-0993",
  },
  {
    department: "Legal",
    company: "Oodoo",
    gender: "Male",
    language: "Bulgarian",
    first_name: "Edouard",
    ssn: "827-28-1023",
  },
  {
    department: "Marketing",
    company: "Skyvu",
    gender: "Male",
    language: "Punjabi",
    first_name: "Ximenez",
    ssn: "601-80-2187",
  },
  {
    department: "Product Management",
    company: "Mynte",
    gender: "Male",
    language: "Kyrgyz",
    first_name: "Morty",
    ssn: "424-24-5646",
  },
  {
    department: "Product Management",
    company: "Yodo",
    gender: "Male",
    language: "Northern Sotho",
    first_name: "Conrad",
    ssn: "540-50-5694",
  },
  {
    department: "Human Resources",
    company: "Yotz",
    gender: "Female",
    language: "Burmese",
    first_name: "Shara",
    ssn: "548-50-5379",
  },
  {
    department: "Legal",
    company: "Brainverse",
    gender: "Female",
    language: "Tok Pisin",
    first_name: "Charmain",
    ssn: "676-55-6334",
  },
  {
    department: "Support",
    company: "Dabtype",
    gender: "Male",
    language: "Luxembourgish",
    first_name: "Laney",
    ssn: "174-16-4514",
  },
  {
    department: "Sales",
    company: "Voonder",
    gender: "Female",
    language: "Mongolian",
    first_name: "Roseanne",
    ssn: "280-88-6512",
  },
  {
    department: "Research and Development",
    company: "Eazzy",
    gender: "Bigender",
    language: "Gujarati",
    first_name: "Rutledge",
    ssn: "425-61-2844",
  },
  {
    department: "Research and Development",
    company: "Brightdog",
    gender: "Male",
    language: "Punjabi",
    first_name: "Gerrard",
    ssn: "300-55-3311",
  },
  {
    department: "Accounting",
    company: "Dablist",
    gender: "Male",
    language: "Croatian",
    first_name: "Cirstoforo",
    ssn: "186-82-7321",
  },
  {
    department: "Services",
    company: "Zooxo",
    gender: "Female",
    language: "Catalan",
    first_name: "Casie",
    ssn: "321-56-0285",
  },
  {
    department: "Engineering",
    company: "Chatterbridge",
    gender: "Male",
    language: "Tok Pisin",
    first_name: "Ange",
    ssn: "597-55-4761",
  },
  {
    department: "Research and Development",
    company: "Leexo",
    gender: "Female",
    language: "Bengali",
    first_name: "Darcee",
    ssn: "528-01-8014",
  },
  {
    department: "Accounting",
    company: "Bubblebox",
    gender: "Male",
    language: "Māori",
    first_name: "Rutter",
    ssn: "191-52-9037",
  },
  {
    department: "Product Management",
    company: "Zoozzy",
    gender: "Male",
    language: "Norwegian",
    first_name: "Judas",
    ssn: "776-26-1609",
  },
  {
    department: "Accounting",
    company: "Feedfire",
    gender: "Male",
    language: "Māori",
    first_name: "Laurie",
    ssn: "138-20-2258",
  },
  {
    department: "Training",
    company: "Mita",
    gender: "Male",
    language: "Pashto",
    first_name: "Baxy",
    ssn: "106-29-4292",
  },
];

// 1. engineering 부서만 가져와서 콘솔 출력
// const a = data.filter((v) => {
//   v.includes(department("Engineering"));
// });

const engineering = data.filter((v) => v.department == "engineering");

// 2. 성별 남자이고 일본어 쓰면, 어디부서이고 이름만 가져와서  출력

// const b = data.filter((v) => {
//   v.includes(gender("Male")) == v.includes(language("Japanese")) || ;
// });

const japanese = data
  .filter((v) => v.gender === "Male" && v.language === "Japanese")
  .map((v) => {
    return { department: v.department, first_name: v.first_name };
  });
console.log(japanese);

// 3. ssn에서 맨 뒷 마지막 자리가 짝수이고, 퍼스트 이름이 K,B,S로 시작하는 사람만 가져오기

const a = data.filter(
  (v) =>
    Number(v.ssn[v.ssn.length - 1]) % 2 === 0 &&
    ["K", "B", "S"].some((i) => v.first_name.startsWith(i))
);

console.log(a);

// 4. korean, japanese, chinese 사용하고
// 성별은 여성이고
// ssn에서 앞의 세 숫자 합이 10 이상

const b = data
  .filter(
    (v) =>
      v.language === "Korean" ||
      v.language === "Japanese" ||
      v.language === "Chinese"
  )
  .filter((v) => v.gender === "Female")
  .filter((v) => {
    // const first = v.ssn.split("-")[0];
    // return Number(first[0]) + Number(first[1]) + Number(first[2]) > 10;
    const arr = [...v.ssn];
    return Number(arr[0]) + Number(arr[1]) + Number(arr[2]) > 10;
  });
console.log(b);
