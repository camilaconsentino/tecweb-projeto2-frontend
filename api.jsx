const axios = require('axios');

async function getToken() {
  const apiEndpoint = 'https://api.mailpro.com/v3/token';

  const requestData = new URLSearchParams();
  
  requestData.append('grant_type', 'password');
  
  requestData.append('username', 'mariavjs@al.insper.edu.br'); // Substitua com o seu nome de usuário
  
  requestData.append('password', '914af416-db21-4581-9a3f-dcd92b121676'); // Substitua com a sua senha da API
  
  const options = {
  
      headers: {
      
      'accept': 'application/json',
      
      'Content-Type': 'application/x-www-form-urlencoded', 
      
      },
      
      }
      
    //   return await axios 
      
    //   .post(apiEndpoint, requestData, options)
      
    //   .then((response) => {
    //     const token = response.data.access_token;

    //     console.log(response.data)

    //   })

    const response = await axios.post(apiEndpoint, requestData, options);

    const token = response.data.access_token;
  
    return token;

    
}
//getToken();

// Fazendo a requisição do email
async function sendMail(user, name) {
    try {
        const bearerToken = await getToken();
        
        const email = {
            email: user,
            id_sender_email: 322291,
            body_html: `Olá ${name}, bem vinde a nossa familia! Entre no site para marcar sua primeira aula`,
            date_planned: null,
            subject: 'Bem Vinde!!',
        };

        // const config = {
        //     headers: {
        //         'accept': 'application/json',
        //         'Content-Encoding': 'Encoding.UTF8',
        //         'Authorization': `Bearer ${bearerToken}`,
                
        //     }}

            const headers = {

                'Authorization': `Bearer ${bearerToken}`,
                
                'Content-Type': 'application/json'
                
                };
                
                
            const config = {
                
                method: 'POST',
                
                url: "https://api.mailpro.com/v3/send/mail",
                
                headers: headers,
                
                data: JSON.stringify(email)
                
                };
                
                
            axios(config).then((response) => console.log(response.data));
                
                
                
                
            
        // const response = await axios.post('https://api.mailpro.com/v3/send/mail', email, config);
        // const body = response.data;
        // console.log(body);
    } catch (error) {
        console.error(error);
    }
}

// Chamar a função sendMail
sendMail("cami.consentino@gmail.com", "Camila");