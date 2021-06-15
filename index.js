const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false}); // para escrever no arquivos json, é necessário inserir {headless: false}
  // não modificar headless para true
  console.log('iniciando')
  const page = await browser.newPage();
  console.log('abrindo pagina')
  await page.goto('https://instagram.com', {timeout: 0});
  console.log('pagina aberta')

  let tot = 0;

  async function logar(){
    await page.type('[name="username"]', 'SEU NOME DE USUARIO AQUI') // insira seu nome de usuario entre aspas simples
    await page.type('[name="password"]', 'SUA SENHA AQUI') //  insira sua senha entre aspas simples. CUIDADO
    await page.click('[type="submit"]')
    
    function tempoCLick(min, max) {
      return Math.random() * (max - min) + min;
    }

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    await page.waitForNavigation(); // aguardando o login ser realizado

    await page.goto('URL DO SORTEIO AQUI') // insira a url do sorteio entre aspas simples

    setInterval(async function comentar(){
      await page.type("[class='Ypffh']", 'SEU COMENTARIO DEVE SER INSERIDO AQUI') // insira o comentario que era feito aqui entre aspas simples

      setTimeout(async() => {
        await page.click("[type='submit']")        
      }, tempoCLick(1900, 3200)); // Não é recomandavel mexer no tempo, melhor caso: 100 comentarios entrou 80/75

      tot++;
      // sqdOP yWX7d    y3zKF      classe do botao de erro
      console.log('Total de comentarios: ' + tot)
    }, getRandomArbitrary(14000, 27000)) // Não é recomandavel mexer no tempo, melhor caso: 100 comentarios entrou 80/75
  }
  setTimeout(() => {
    logar();
  }, 2300);
  // await browser.close();
})();
