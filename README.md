# analytics
The ChurnZero Success Panel and Analytics client 

# Install
`npm i https://github.com/churnzero/analytics`

### Using webpack?
`require('script-loader!churnzero-analytics');`

# F.A.Qs
- __Do I still need the snippet ?__

  Nope!
  
- __Without the snippet how do I set the app key?__

  simply call ` ChurnZero.push(['setAppKey', '@YOUR_APP_KEY']);` somewhere in your app startup after the analytics script has been loaded.
  
