const arr1 = [1, 2, 3, 4];
document.write(arr1.map(n => n * 5));
document.write("<br/><br/>");

const arr2 = [9, 11, 17, 31];
const index = arr2.findIndex(n => n > 12);
document.write(index);
document.write("<br/><br/>");

const arr3 = [8, 6, 4, 2];
const dividedBy6 = arr3.every(n => n % 6 === 0);
document.write(dividedBy6);
document.write("<br/><br/>");

const arr4 = [12, 5, 3, 1];
const graterThen20 = arr4.find(n => n > 20);
document.write(graterThen20 ? true : false);
document.write("<br/><br/>");

const arr5 = ['a', 2, 'b', 1];
const findTheString = arr5.filter(n => typeof n === "string");
document.write(findTheString);
document.write("<br/><br/>");

const arr6 = [8, '6', 4, '3'];
const graterThen5 = arr6.find(n => n > 5);
document.write(graterThen5);
document.write("<br/><br/>");

const arr7 = [4, 3, 2, 1];
document.write(arr7.map(n => n * 2));
document.write("<br/><br/>");

const arr8 = [7, 5, 3, 1];
const smallerThen9 = arr4.every(n => n < 9);
document.write(smallerThen9);
document.write("<br/><br/>");

const arr9 = [6, 5, 4, 3, 2, 1];
const oddNumbers = arr9.filter(n => n % 2 == 0 ? '' : n);
document.write(oddNumbers);
document.write("<br/><br/>");

const arr10 = ["apple", "mango", "banana"];
document.write(arr10.map(n => n + "-java"));
document.write("<br/><br/>");

const arr11 = ["hello", "world", "programming", "computer"];
document.write(arr11.findIndex(s => s.length > 2));
document.write("<br/><br/>");

const arr12 = ["cat", "dog", "elephant", "fox"];
const length4 = arr12.every(s => s.length >= 4);
document.write(length4);
document.write("<br/><br/>");

const arr13 = ["apple", "banana", "cherry", "date"];
document.write(arr13.some(f => typeof f === 'string' && f.startsWith('b')));
document.write("<br/><br/>");

const arr14 = ["apple", "banana", "orange", "grape"]
document.write(arr14.filter(f => typeof f === 'string' && f.endsWith('e')))
document.write("<br/><br/>")

const arr15 = ["apple", "banana", "cherry"]
document.write(arr15.find(f => typeof f === 'string' && f.includes('b')))
document.write("<br/><br/>")

const json = {
    name: "Eli",
    lastName: "Shtarker",
    age: 28,
    birthday: "21/12/1995",
    hobbis: ["playing games", "learning", "playing guitar", "music", "photoshop", "animating on unity/patical effects"],
    frindsHobbis: {
        shelo: "guitar",
        kim: "piano",
        itay: "coding",
        arthur: "gaming",
    }
    , favoriteSongs: {
        metal: "https://www.youtube.com/watch?v=I77mjesUbkw",
        piano: "https://www.youtube.com/watch?v=3aOzItICytI",
        rap: "https://www.youtube.com/watch?v=J7_bMdYfSws",
        dive: "https://www.youtube.com/watch?v=DT61L8hbbJ4",
        game: "https://www.youtube.com/watch?v=Gf4TCmMl3hk",
        anime: "https://www.youtube.com/watch?v=jlUBqDK6Ds4",
        techno: "https://www.youtube.com/watch?v=5kKnrjeDUqw",
        ruck: "https://www.youtube.com/watch?v=Twmg_r_2seI",
        chillstep: "https://www.youtube.com/watch?v=pkitw9LUB88",
        nostalgic: "https://www.youtube.com/watch?v=ViP87WipSm0"
    }
};

const myJSON = JSON.stringify(json);
document.write(myJSON);