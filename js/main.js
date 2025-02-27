/**
 * Tienes una lista de invitados ordenada alfabéticamente, y tu tarea es organizar la mesa para una cena. 
 * Sin embargo, algunos invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo. 
 * Tu objetivo es encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.
 */

const guests = [
    "Aaron", "Abigail", "Ace", "Adelaide", "Adrian",
    "Bailey", "Beatrice", "Benjamin", "Blake", "Bryce",
    "Caleb", "Cameron", "Cecilia", "Claire", "Cyrus",
    "Daisy", "Daniel", "Derek", "Diana", "Dylan",
    "Edison", "Edward", "Elena", "Eliza", "Ethan",
    "Fabian", "Faith", "Felix", "Flora", "Francis",
    "Gabriel", "George", "Grace", "Grant", "Griffin",
    "Hazel", "Heather", "Henry", "Hope", "Hunter",
    "Ian", "Ida", "Ingrid", "Iris", "Isaac",
    "Jack", "Jade", "James", "Jasmine", "Julia",
    "Kai", "Kate", "Keith", "Kennedy", "Kyle",
    "Lance", "Liam", "Lily", "Luna", "Luther",
    "Madeline", "Magnus", "Maya", "Michael", "Myles",
    "Nadia", "Nathan", "Neil", "Nina", "Noah",
    "Oliver", "Olivia", "Omar", "Oscar", "Owen",
    "Paige", "Parker", "Peter", "Phoenix", "Piper",
    "Quentin", "Quinn", "Quincy", "Quinta", "Quirina",
    "Rachel", "Rex", "River", "Rose", "Ryan",
    "Sage", "Samuel", "Sidney", "Sophia", "Sullivan",
    "Tara", "Theodore", "Thomas", "Troy", "Tyler",
    "Uma", "Ursula", "Ulysses", "Unity", "Urban",
    "Valencia", "Victor", "Violet", "Vincent", "Vivian",
    "Wade", "Walter", "Wendy", "William", "Winston",
    "Xavier", "Ximena", "Xiomar", "Xander", "Xerxes",
    "Yale", "Yara", "Yolanda", "Yuri", "Yvette",
    "Zachary", "Zara", "Zelda", "Zoe", "Zion"
];

let findCouple = (arr) =>
{
    let first = 0;
    let next = 1;

    while(next < arr.length){
        if(arr[first].charAt(0) === arr[next].charAt(0)){
            console.log(arr[first], arr[next]);
            return true;            
        }
    }
    return null; // si no se encuentra ningún par
}
console.log(guests);
console.log(findCouple(guests));