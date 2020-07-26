export function truncate(str, n = 300){
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
  };