async function getdata () {
    let response = await fetch('datafile.json');

    let parsed = await response.json(); 

    console.log(parsed)
}

getdata()