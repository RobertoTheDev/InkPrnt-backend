const axios = require('axios');

axios.post('http://localhost:5000/api/webhooks/stripe', {
  type: 'payment_intent.succeeded',
  data: {
    object: { id: 'pi_3S5GV7HeIgsVSdnH0AKutD4u' }
  }
})
.then(() => console.log('Webhook manual enviado'))
.catch(console.error);
