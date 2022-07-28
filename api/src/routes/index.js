const { Router } = require('express')

const router = Router()

router.get('/reverse', (req, res) => {
  try {
    const { text } = req.query
    res.header('Access-Control-Allow-Origin', '*')

    const normalized = text.toLowerCase().split('').reverse().join('')
    const palindrome = normalized === normalized.split('').reverse().join('')

    text === '' && res.status(400).json({ success: false, error: 'text is empty' })
    Number(text) && res.status(400).json({ success: false, error: 'number is invalid' })
    return res.status(200).json({ inverted: text.split('').reverse().join(''), palindrome })
  } catch (error) {
    res.status(404).json({ success: false, error: error.message })
  }
})

module.exports = router
