const text = document.getElementById("text");
const author = document.getElementById("author");
const next = document.getElementById("next");

const getApiFatch = async () => {
    const api = "https://type.fit/api/quotes";
    try {
      const getAPi = await fetch(api);
      const jshonToArr = await getAPi.json();
      nextVoice(jshonToArr)
    } catch (err) {
      console.log(err)
    }
  }
  function nextVoice(all) {
    const number = Math.floor(Math.random()* all.length)
    let tex = all[number].text;
    let aut = all[number].author;
    if(aut == null){
        aut = "unknown";
    }
    text.innerText = tex;
    author.innerText = aut;
  }
getApiFatch()
next.addEventListener("click",getApiFatch);