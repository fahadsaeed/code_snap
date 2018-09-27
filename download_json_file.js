function downlaod(json)
{let data =  JSON.stringify(json),
            href = "data:text/json;charset=utf-8," + encodeURIComponent(data),
            anchor = document.createElement('a');
        anchor.setAttribute("href", href);
        anchor.setAttribute("download", 'test.json');
        anchor.click();
    }



  const jsonData = {a: 1, b: 2};

  download(jsonData);