var count_new = 0;
const imgColumns = document.querySelectorAll('.img_column');
const contentColumns = document.querySelectorAll('.content_column');
const spinner = document.querySelector('#spinner');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

// Função para buscar dados da API e armazenar em sessionStorage
async function fetchDataAndStoreInSessionStorage() {
    const response = await fetch('https://g1-clone-node-react.onrender.com/news');
    const news = await response.json();
  
    // Armazene os dados em sessionStorage
    sessionStorage.setItem('cachedNews', JSON.stringify(news));
  
}
  
  // Função para obter os dados da API ou do sessionStorage
  async function getNews() {
    // Recupere os dados em cache do sessionStorage
    const cachedNews = sessionStorage.getItem('cachedNews');
  
    if (cachedNews) {
      // Os dados em cache estão disponíveis
      const news = JSON.parse(cachedNews);
  
      if (news) {
        spinner.style.display = 'none';
        main.style.display = 'block';
        footer.style.display = 'flex';
      }
  
      // Loop através das colunas
      for (let i = 0; i < imgColumns.length; i++) {
        // Calcula o índice inicial para esta coluna
        const startIndex = (count_new * imgColumns.length + i) % news.length;
        const newsItem = news[startIndex];
  
        // Define a imagem, o conteúdo e o texto alternativo (alt) para a imagem
        imgColumns[i].src = newsItem.image;
        contentColumns[i].innerText = newsItem.content;
        imgColumns[i].alt = newsItem.content; // Define o atributo alt da imagem
      }
  
      count_new++;
  
      // Se todas as colunas exibirem o conteúdo atual, reinicia o contador
      if (count_new >= imgColumns.length ) {
        count_new = 0;
      }
    }
  }
  
  // Execute a função de busca e armazenamento no sessionStorage
  document.addEventListener('DOMContentLoaded', async () => {
    await fetchDataAndStoreInSessionStorage();
  });
  
  // Defina um intervalo para chamar a função getNews a cada 4 segundos
  setInterval(async () => {
    await getNews();
  }, 4000);
  
