let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'ILS'
});

const inventory = [
    {
        image: 'https://img.ksp.co.il/item/260334/b_1.jpg?v=5',
        company: 'https://www.t.co.il/storage/uploads/63bec476ad1f6-1673446518.png',
        address: 'Tagore Ramat Aviv',
        city: 'Tel-aviv',
        price: 6_490,
        link: 'https://ksp.co.il/web/item/260334',
        rate: '&#11088&#11088&#11088&#11088&#11088'
    },
    {
        image: 'https://www.ivory.co.il/files/catalog/org/1594018923x23PA.jpg',
        company: 'https://serviced.co.il/wp-content/uploads/2021/06/%D7%90%D7%99%D7%99%D7%91%D7%95%D7%A8%D7%99-%D7%9C%D7%95%D7%92%D7%95-1.webp',
        address: 'Jabotinsky St 45',
        city: 'Ashdod',
        price: 2_869,
        link: 'https://www.ivory.co.il/catalog.php?id=33547',
        rate: '&#11088&#11088&#11088'
    },
    {
        image: 'https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/https://www.payngo.co.il/media/catalog/product/d/o/doxdghwdsfrdesgload.png/w_700,h_700,r_contain',
        company: 'https://www.clicko.co.il/wp-content/uploads/2023/06/%D7%9E%D7%97%D7%A1%D7%A0%D7%99-%D7%97%D7%A9%D7%9E%D7%9C-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%9C%D7%95%D7%92%D7%95-768x768.webp',
        address: 'Haled St 7',
        city: 'Holon',
        price: 399,
        link: 'https://www.payngo.co.il/317085.html?gad_source=1',
        rate: '&#11088'
    },
    {
        image: 'https://www.topmarket.co.il/images/detailed/58/37264822_1510847742.jpg',
        company: 'https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/348237131_572841154960473_8960485667211534416_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=fDrYrxH_BmUAX9fIYRg&_nc_ht=scontent.ftlv6-1.fna&oh=00_AfD4b9MCAZz9Dj40zb_2cOKAtD-AP23pkWUhoFp2ghf7hw&oe=65C63A09',
        address: "5 Ahad Ha'am St",
        city: "Netanya",
        price: 3_909,
        link: 'https://www.topmarket.co.il/he/monitor-samsung-c34h890wjn-34-full-hd-led-curved-black-titanium/',
        rate: '&#11088&#11088&#11088&#11088'
    },
    {
        image: 'https://www.homecenter.co.il/cdn/shop/files/1690719882736.jpg?v=1701289339',
        company: 'https://www.royalwarrant.org/sites/default/files/styles/768x768/public/company-logo/2022-09/Office%2520Depot%2520logo%2520new_0.png?itok=x9Q8ruDZ',
        address: 'Sha-nes 17',
        city: "Be'er Ya'akov",
        price: 549.90,
        link: 'https://www.officedepot.co.il/leading-brands/computer-screen-concave-samsung-c-24-f-390-fh-24?utm_adgroup=',
        rate: '&#11088&#11088'
    }
];

let orderedTv = []
let sum = 0
function copyObject(tv, index) {
    return `<tr id="tr${index}">
        <th>${index + 1}</th>
        <td><a href='${tv.image}' target="_blank"><img src='${tv.image}' alt='monitor'></a></td>
        <td><img src='${tv.company}' alt='logo'></td>
        <td>${tv.city}</td>
        <td>${tv.address}</td>
        <td>${formatter.format(tv.price)}</td>
        <td><a href='${tv.link}'target="_blank">Click</a></td>
        <td><span class="stars">${tv.rate}</span></td>
        <td><button class="buy" onclick='buy(${index})'>${orderedTv.includes(tv) ? "Buy" : "Buy"}</button><button class="removeBtn" onclick='removeBtn()'>Remove</button></td>
    </tr>`;
}

function makeTables() {
    inventoryBody.innerHTML = inventory.map(copyObject)
}

makeTables();




let x = document.getElementById("resultContainer");

function buy(index) {
    let y = orderedTv.length + 1


    const tv = inventory[index]
    if (orderedTv.includes(tv)) {
        //orderedTv.splice(orderedTv.indexOf(tv), 1)
    } else {
        orderedTv.push(tv)
        sum = parseFloat(orderedTv[index].price + sum)
        itemsOrderedContainer.innerHTML = orderedTv.map(orderListToHTML)
        x.innerHTML = `You have [${y}] items in your crate your total price is ${sum}`;
    }
}


function removeBtn() {
    let b = orderedTv.length
    let numb = parseFloat(b)
    if (b > 0) {
        sum -= orderedTv[b - 1].price;
        orderedTv.pop();
    }
    let y = orderedTv.length;
    itemsOrderedContainer.innerHTML = orderedTv.map(orderListToHTML).join('');

    x.innerHTML = y == 0 ? "" : `You have [${y}] items in your crate your total price is ${sum}`;
}

function orderListToHTML(tv, index) {
    return `<div class="dataContainer><tr>
    <th class="orderPrint" id="titlePrint"><span id="index">${index + 1}</span></th>
    <td class="orderPrint"><img src='${tv.company}' alt='logo'></td>
    <td><span class="details">${tv.city}</span></td>
    <td class="orderPrint"><span class="details">${formatter.format(tv.price)}</span></td>
    </tr></div>`

}


