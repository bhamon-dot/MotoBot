const { deauville } = require('./deauville')

exports.dispatch = (msg) => {
  if (
    msg.content.indexOf('quelle est la meilleure moto') >= 0 ||
    msg.content.indexOf('deauville') >= 0
  ) {
    deauville(msg)
  }
}