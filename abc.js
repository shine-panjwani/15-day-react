const data = async () => {
    const data = await fetch(`https://api.github.com/users/shine-panjwani`);
    const response = await data.json();
    console.log(response);
}
data();