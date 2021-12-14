# Gallery Now


## Gallery-Server
* Från ladda new gallery-server från GitHub
* Kör sedan node app.js i en ny terminal 

* https://developer.bring.com/api/booking/
* https://github.com/bring

## API-er
* API URL är http://127.0.0.1:3008/api och metod är POST.
* API-Lista
    * ArtistLista
    * ArtistPaintingLista

## ArtistLista
* Hämtra alla artister

### Exempel
```
{
    "_api_tokeb" : "DB6A520C73B3513661DEB6BC3C9C688E",
    "_group" : "Artist",
    "_action" : "ArtistList"
}   
```
### Resultat
```
[
    {
        "artist_id": "bega",
        "artist": "Abba Grus Great",
        "seo_url": "b-grus-great",
        "movements": ""
    },
    {
        "artist_id": "grmm",
        "artist": "Abel Grimmer",
        "seo_url": "grimmer-abel",
        "movements": "baro"
    }
]
```

## ArtistPaintingList

* Hämtar en ar istsalla målningar
* parameter är artist_id från ArtistList api:et
* Bilder nås sedan via ... 

### Exempel
```
{
    "_api_tokeb" : "DB6A520C73B3513661DEB6BC3C9C688E",
    "_group" : "Artist",
    "_action" : "ArtistPaintingList",
    "_artist_id" : "west"
}
```
### Resultat
```
[
    {
        "painting_id": "21858",
        "painting": "A Domestic Affliction",
        "image": "benjamin-west-a-domestic-affliction.jpg"
    },
    {
        "painting_id": "21859",
        "painting": "Agrippina Landing At Brundisium With The Ashes Of Germanicus",
        "image": "benjamin-west-agrippina-landing-at-brundisium-with-the-ashes-of-germanicus.jpg"
    }
]
```
