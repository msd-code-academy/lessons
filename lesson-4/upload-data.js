// upload sample data to backend

const request = require('request')
const FIREBASE_URL = require('./src/config/api').FIREBASE_URL

const notes = [
  {
    title: 'Day 1',
    text: 'Today is the first day of our training',
  },

  {
    title: 'Day 2',
    text: 'We started programming in JavaScript',
  },

  {
    title: 'Day 3 - JavaScript is awesome',
    text: 'Today we created our first React App - JavaScript is awesome!!!',
  },
]

request(
  {
    method: 'PUT',
    uri: `${FIREBASE_URL}.json`,
    body: JSON.stringify({}),
  },
  (delErr, delResponse, delBody) => {
    if (delErr) {
      console.error('An error occurred during upload', delErr)
    }
    console.log(`Deleting result: ${delBody}`)

    notes.map(note => {
      request(
        {
          uri: `${FIREBASE_URL}/notes.json`,
          method: 'POST',
          body: JSON.stringify(note),
          timeout: 10000,
        },
        (error, response, body) => {
          if (error) {
            console.error('An error occurred during upload', error)
          }
          console.log(`Insert result: ${body}`)
        }
      )
    })
  }
)
