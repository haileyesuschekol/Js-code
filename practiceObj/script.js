// const adress = {
//   steet: "bole",
//   city: "addis abeba",
//   zipcode: 1000,
// }

// function showAddress(adress) {
//   for (let key in adress) {
//     console.log(key, adress[key])
//   }
// }
// // showAddress(adress)

// //factory function

// function addressObject(s, c, z) {
//   return {
//     s,
//     c,
//     z,
//   }
// }

// const newObj = addressObject("aa", "aac", 1000)
// // console.log(newObj)

// //construcror function

// function AddressConstructor(s, a, z) {
//   ;(this.s = s), (this.a = a), (this.z = z)
// }

// const constructorF = new AddressConstructor("new", "area", 1201)

// console.log(constructorF)

//another challange

// function Address(street, city, zipCode) {
//   this.street = street
//   this.city = city
//   this.zipCode = zipCode
// }

// let address1 = new Address("a", "b", "c")
// let address2 = new Address("a", "b", "c")

// function areEqual(address1, address2) {
//   for (let key in address1) {
//     for (let key in address2) {
//       console.log(address1[key] !== address2[key] ? false : true)
//     }
//   }
// }

// areEqual(address1, address2)

function Post(title, body, author, views, [{ author }]) {
  this.title = title
  this.body = body
  this.author = author
  this.views = views
  this.comment = comment
  this.isLive = isLive
}
