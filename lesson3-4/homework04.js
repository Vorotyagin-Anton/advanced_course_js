'use strict'

const myText = '\nOne: \'Hi Mary.\' \nTwo: \'Oh, hi.\'\nOne: \'How are you doing?\'\nTwo: \'I\'m doing alright. How about you?\'\nOne: \'Not too bad. The weather is great isn\'t it?\'\nTwo: \'Yes. It\'s absolutely beautiful today.\'\nOne: \'I wish it was like this more frequently.\'\nTwo: \'Me too.\'\nOne: \'So where are you going now?\'\nTwo: \'I\'m going to meet a friend of mine at the department store.\'\nOne: \'Going to do a little shopping?\'\nTwo: \'Yeah, I have to buy some presents for my parents.\'\nOne: \'What\'s the occasion?\'\nTwo: \'It\'s their anniversary.\'\nOne: \'That\'s great. Well, you better get going. You don\'t want to be late.\'\nTwo: \'I\'ll see you next time.\'\nOne: \'Sure. Bye.\''

console.log(myText)

const regexp01 = /'/g

let myTextNew01 = myText.replace(regexp01, '"')

console.log(myTextNew01)

const regexp02 = /(?<!\w)'/g

let myTextNew02 = myText.replace(regexp02, '"')

console.log(myTextNew02)