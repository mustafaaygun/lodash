import _ from 'lodash'

/* DIZILER_BASLANGIC */
var users = [
    { 'user': 'Mustafa', 'active': false },
    { 'user': 'Mustafa', 'active': false },
    { 'user': 'Arda', 'active': false },
    { 'user': 'Ahmet', 'active': true },
    { 'user': 'Selami', 'active': true }
];

/**
 * Icerisine gönderilen diziyi istenilen sayıda parçalara böler
 * 
 * @param {Array,Number}
 * @returns {Array}
 * 
 * parcala 
 * =
 * [
    [
        { user: 'Mustafa', active: false },
        { user: 'Mustafa', active: false }
    ],
    [
        { user: 'Arda', active: false }, 
        { user: 'Ahmet', active: true }
    ]
   ]
 * 
**/
const parcala =_.chunk(users,2);

/**
 * Aranan degere gore dizi icindeki bulunan ilk ögenenin sırasını verir
 * @returns {Number}
 * siraBul
 * =
 * 3
 */
const siraBul = _.findIndex(users, (item) => {
    return item.active;
});


/**
 * Dizi icindeki ilk elemanı verir
 * ilkEleman
 * =
 * { user: 'Mustafa', active: false }
 */
const ilkEleman = _.head(users);

/**
 * Dizi icindeki son elemanı verir
 * sonEleman
 * =
 * { user: 'Selami', active: true }
 */
const sonEleman = _.last(users);

/**
 * Dizi icindeki istenen indexteki elemanı verir
 */
const  sonElemanIndexle = _.nth(users, -1);
const ilkElemanIndexle = _.nth(users, 0);

/**
 * Dizi icinde elemanları filtreleyerek geri dondurur
 * Remove direk siler artık usersda o deger yoktur
 * silDegerIle
 * =
 * [
    { user: 'Mustafa', active: false },
    { user: 'Mustafa', active: false },
    { user: 'Ahmet', active: true },
    { user: 'Selami', active: true }
   ];
   users
   =
   [
    { user: 'Arda', active: false },
    { user: 'Ahmet', active: true },
    { user: 'Selami', active: true }
   ]
 */
const silDegerIle = _.reject(users, { 'user': 'Arda', 'active': false });
_.remove(users, (item) => {
    return item.user == 'Ahmet';
});

/**
 * Diziyi ters çevirir
 * users
 * =
 * [
    { user: 'Selami', active: true },
    { user: 'Ahmet', active: true },
    { user: 'Arda', active: false }
   ]
 */
_.reverse(users);
_.reverse(users);
/**
 * Diziyi uniq olarak döndürür
 * benzersizYap
 * =
 * [
    { user: 'Selami', active: true },
    { user: 'Arda', active: false },
    { user: 'Mustafa', active: false }
   ]
 */

const benzersizYap = _.uniqBy(users, (item) => {
    return item.user;
});

/**
 * Dizideki istenen eleman adedi kadar döndürür
 * Dizi sayısı aşılsa bile sıkıntı olmuyor
 * arrayTakeFromStart 
 * = 
 * [ { user: 'Mustafa', active: false } ]
 */
const arrayTakeFromStart = _.take(users, 1);

/**
* Dizideki istenen eleman adedi kadar döndürür
* Dizi sayısı aşılsa bile sıkıntı olmuyor
* arrayTakeFromEnd
* =
* [ { user: 'Selami', active: true } ]
*/
const arrayTakeFromEnd = _.takeRight(users, 1);

/* DIZILER_BITIS */

var users2 = [
    { 'user': 'Mustafa', 'active': false, 'age': 24 },
    { 'user': 'Arda', 'active': false, 'age': 33 },
    { 'user': 'Ahmet', 'active': true, 'age': 48 }
];

/**
 * Tüm elemanlar verilen durumu karşılıyor mu
 * @returns {boolean}
 */
const objEvery = _.every(users2, ['active', false]);

/**
 * Tüm elemanları filtreler
 */
const objFilter = _.filter(users2, (item) => {
    return item.age > 30;
});

/**
 * Tüm elemanları döngü ile döndürür
 */
const objForEach = _.forEach(users2, (item) => {
    _.forEach(item,(value,key)=>{
        let deger = (`${value} : ${key}`);
    })
})

/**
 * Tüm elemanları döngü sonrası degiskene atar
 */
const objMap = _.map(users2,'user');