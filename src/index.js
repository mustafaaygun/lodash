import _ from 'lodash'

/* DIZILER_BASLANGIC */
var users = [
    { 'user': 'Mustafa', 'active': false },
    { 'user': 'Mustafa', 'active': false },
    { 'user': 'Arda', 'active': false },
    { 'user': 'Ahmet', 'active': true }
];

/**
 * Dizi icindeki aranan ögenenin sırasını verir
 * @returns {Number}
 */
const findIndex = _.findIndex(users, (item) => {
    return item.active
})

/**
 * Dizi icindeki ilk elemanı verir
 */
const getFirst = _.head(users)

/**
 * Dizi icindeki son elemanı verir
 */
const getLast = _.last(users)

/**
 * Dizi icindeki istenen indexteki elemanı verir
 */
const getLastOne = _.nth(users, -1)
const getFirstOne = _.nth(users, 0)

/**
 * Dizi icinde elemanları siler
 * Remove direk siler
 */
const removeGiven = _.reject(users, { 'user': 'Arda', 'active': false })
const removeFunc = _.remove(users, (item) => {
    return item.user == 'Fehmi'
})

/**
 * Diziyi ters çevirir
 */
const arrayReverse = _.reverse(users)

/**
 * Diziyi uniq olarak döndürür
 */
const arrayUniq = _.uniqBy(users, (item) => {
    return item.user
})

/**
 * Dizideki istenen eleman adedi kadar döndürür
 * Dizi sayısı aşılsa bile sıkıntı olmuyor
 */
const arrayTakeFromStart = _.take(users, 1)

/**
* Dizideki istenen eleman adedi kadar döndürür
* Dizi sayısı aşılsa bile sıkıntı olmuyor
*/
const arrayTakeFromEnd = _.takeRight(users, 1)

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
const objEvery = _.every(users2, ['active', false])

/**
 * Tüm elemanları filtreler
 */
const objFilter = _.filter(users2, (item) => {
    return item.age > 30
})

/**
 * Tüm elemanları döngü ile döndürür
 */
const objForEach = _.forEach(users2, (item) => {
    _.forEach(item,(value,key)=>{
        console.log(`${value} : ${key}`)
    })
})

/**
 * Tüm elemanları döngü sonrası degiskene atar
 */
const objMap = _.map(users2,'user')



console.log(objMap)