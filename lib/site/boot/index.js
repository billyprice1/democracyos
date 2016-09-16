var express = require('express')
var app = module.exports = express()

app.use(require('lib/site/sign-in'))
app.use(require('lib/site/sign-up'))
app.use(require('lib/site/logout'))
app.use(require('lib/site/forgot'))
app.use(require('lib/site/reset'))
app.use(require('lib/site/help'))
app.use(require('lib/site/topic-layout'))
app.use(require('lib/site/notifications'))
app.use(require('lib/site/home-multiforum'))
app.use(require('lib/site/not-found'))