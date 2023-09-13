
const useCurrentPath = (path:string):string => {
     // Split the input string by the first '/' character
  const firstSlashIndex = path.indexOf('/');
  const word = firstSlashIndex !== -1 ? path.slice(firstSlashIndex + 1) : path;
  
  // Remove any characters after the next '/'
  const secondSlashIndex = word.indexOf('/');
  
  if (secondSlashIndex !== -1) {
    return word.slice(0, secondSlashIndex).toLocaleLowerCase();
  } else {
    if(word === ''){
        return 'home'
    }else{
        return word;
    }
    
  }
}
export default useCurrentPath;