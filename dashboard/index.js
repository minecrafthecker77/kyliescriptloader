function main() {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');

  if (isLoggedIn === 'true') {
    console.log('Successful Login');
  } else {
    console.log(
      'An attempt has been made to use Kylie Script Loader without auth. If this persists, you will be blacklisted.'
    );
    window.location.href = '../login';
  }
}

main();