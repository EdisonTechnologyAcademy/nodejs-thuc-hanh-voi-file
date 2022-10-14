import path from 'path';

const getFileName = (forder: string) => {
  const fileName = path.basename(forder);
  console.log(fileName);
}

getFileName('/var/log/nginx/error.log');
