# Fauna Nation Assignment

This project creates CRUD operations on table of Amphibians using nodejs and mysql database

### Packages used

body-parser, express, mysql, nodemon


### Code structure

- All the codes are in index.js file. you can run it as - nodemon index.js

- Connecting to mysql server with credentials as
 ```sh
        host:'localhost',
        user: 'FaunaNation',
        password:'%FaunaNationIntern2021%',
        database: 'ASSIGNMENT'
```
- It starts running on port localhost:2000
- View the inserted data in json format without nesting
```sh
         GET
        /fauna 
```
- Every single row entry has id which is auto incrementing. Using the id we can get single row data with that specific id

```sh
        GET
        /fauna/:id
        example : /fauna/1  -gives data entry with id=1
```
- Deleting a row from the table
```sh
        DELETE
        /delete/:id
        example : /delete/1  -deleted data entry with id=1

```
- Insert rows into table
```sh
        POST
        /insert
```

- In postman , body in json can be given as (example given is second row of amphibians)
(better to include is eventhough it is automatically generated)
```sh
{
    "CommonName":"Asian Common Toad ",
    "ScientificName":"Duttaphrynus melanostictus",
    "CountryOfOrigin":"Across Asia",
    "IfExoticLandmark":"   ------------------",
    "SpeciesLegalStatus":"Schdule4",
    "SpeciesStatusIUCN":"Least Concern",
    "GenderTypes":"Male & Female",
    "AverageLifeExpectancyInYears":"4 years (wild), 10 years(captivity)",
    "OptimumTemperatureRange":"Day - 24°C to 26°C ; Night - 20°C",
    "HibernationDuration":"October - late March",
    "MetamorphosisDuration":"October - late March",
    "SeasonOfHighestActivity":"Rainy",
    "BreedingSeason":"Thoughout Year",
    "SocialPreference":"Solitary",
    "ParentalCare":"No Parental Care",
    "GestationPeriod":"No.",
    "LitterSize":"   ------",
    "NaturalDiet":"Wasps,bees,ants,small arthropods & molluscs.",
    "CaptiveFoodRecommendation":"earthworms, locusts, crickets, cockroaches, mealworms, feeder fish, moths, beetles, woodlice, butterflies, snails and waxworms. ",
    "FrequencyOfFood":"Adults should be given calcium and D3 supplements at least twice a week, whilst juveniles will require their food to be dusted more regularly. 2-4 times a week ",
    "FastingInstructions":"   ------------",
    "VaccinationSchedule":"     ---------",
    "Habitat":"Forest, rainforest,lakes & ponds,river and streams, temporary pools,marsh,swamps,bogs.",
    "ThreatPerception":"Release mild toxins when touched.Serious health hazards when consumed.",
    "BiggestThreat":"-------",
    "IUCNLink":"https://www.iucnredlist.org/species/54707/86445591#habitat-ecology",
    "WikipediaLink":"https://en.m.wikipedia.org/wiki/Duttaphrynus_melanostictus",
    "LinkOfPhotograph":"https://www.alamy.com/stock-photo-asian-common-toad-duttaphrynus-melanostictus-bufonidae-asia-86075638.html",
    "OtherLinksAndSources":"https://animaldiversity.org/accounts/Duttaphrynus_melanostictus/ ; http://www.theamphibian.co.uk/Black_spined_toad_care_sheet_bufo_melanostictus.htm#:~:text=Pet%20Black-Spined%20toads%20should,%2C%20butterflies%2C%20snails%20and%20waxworms. ; https://wiki.nus.edu.sg/display/TAX/Duttaphrynus+melanostictus+-+Asian+Common+Toad#Duttaphrynusmelanostictus-AsianCommonToad-10.GLOSSARY;",
    "Remarks":"Generally they are solitary species but come together in groups during breeding season.",
    "Verification":"",
    "id":2
}
```
- Lastly for updating data, here I used only by recieving Id from the req.params and then changing data in the row

```sh
            POST
            /update/:id
            example : /update/2

```
- postman body can contain the cloumn names and changes you want to make
```sh
{
    "CommonName":"Surya VR ",
}
```
- The name will change to Surya VR


